import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('PUT /businesses/<businessid>', () => {
	it('should update a business', (done) => {
		const update = {
			name: 'Isaac farms',
			categories: 'Agric, farming, consumer goods',
			location: '23 Idiroko lane. Iragberi'
		};
		chai.request(app)
			.put('/api/v1/businesses/101')
			.send(update)
			.end((err, res) => {
				res.statusCode.should.equal(200);
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.body.message.should.equal('Your information has been updated');
				res.body.should.have.property('details');
				res.body.details.should.be.a('object');
				res.body.should.not.equal(0);
				done();
			});
	});
	it('should return invalid id', (done) => {
		const update = {
			name: 'Isaac Ajala',
			categories: 'Agric, farming, consumer goods',
			location: '23 Idiroko lane. Iragberi'
		};
		chai.request(app)
			.put('/api/v1/businesses/106')
			.send(update)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.body.error.should.not.equal(null);
				res.body.error.should.equal('Invalid id');
				res.statusCode.should.equal(404);
				done();
			});
	});
	it('should return bad request', (done) => {
		chai.request(app)
			.put('/api/v1/businesses/106')
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
