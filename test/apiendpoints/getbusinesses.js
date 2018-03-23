import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('GET /businesses/<businessid>', () => {
	it('should return the requested business', (done) => {
		chai.request(app)
			.get('/api/v1/businesses/101')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should return invalid if businessid does not exist ', (done) => {
		chai.request(app)
			.get('/api/v1/businesses/107')
			.end((err, res) => {
				res.body.should.have.property('error');
				res.body.error.should.equal('Business not found');
				res.statusCode.should.equal(404);
				done();
			});
	});
});
