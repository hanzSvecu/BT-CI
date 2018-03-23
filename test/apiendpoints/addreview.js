import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('POST /businesses/<businessid>/reviews', () => {
	it('should add review to a business', (done) => {
		const review = {
			name: 'adura oyewole',
			rating: 4,
			comment: 'It is a good business'
		};
		chai.request(app)
			.post('/api/v1/businesses/101/reviews')
			.send(review)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.body.message.should.equal('Review sent. Thank you');
				res.body.should.have.property('details');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should send error message if business not found', (done) => {
		const review = {
			name: 'adura oyewole',
			rating: 4,
			comment: 'It is a good business'
		};
		chai.request(app)
			.post('/api/v1/businesses/105/reviews')
			.send(review)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.body.error.should.equal('Not found');
				res.statusCode.should.equal(404);
				done();
			});
	});
	it('should return bad request', (done) => {
		chai.request(app)
			.post('/api/v1/businesses/105/reviews')
			.send()
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.body.error.should.equal('Bad request');
				res.statusCode.should.equal(400);
				done();
			});
	});
});
