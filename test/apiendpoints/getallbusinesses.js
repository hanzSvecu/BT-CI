import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('GET /businesses', () => {
	it('should return all businesses', (done) => {
		chai.request(app)
			.get('/api/v1/businesses')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should return all businesses by location', (done) => {
		chai.request(app)
			.get('/api/v1/businesses?location=Uganda')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('Business');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should return all businesses by category', (done) => {
		chai.request(app)
			.get('/api/v1/businesses?category=tech')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('Business');
				res.statusCode.should.equal(200);
				done();
			});
	});
});
