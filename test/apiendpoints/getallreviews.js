import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('GET /businesses/<businessid>/reviews', () => {
	it('should return the reviews for a business', (done) => {
		chai.request(app)
			.get('/api/v1/businesses/101/reviews')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should return invalid if businessid does not exist ', (done) => {
		chai.request(app)
			.get('/api/v1/businesses/107/reviews')
			.end((err, res) => {
				res.body.should.have.property('error');
				res.body.error.should.equal('Not a registered Business');
				res.statusCode.should.equal(404);
				done();
			});
	});
});
