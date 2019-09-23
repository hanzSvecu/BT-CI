import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../app';

chai.use(chaiHttp);

describe('app', () => {
	it('should catch all other routes', (done) => {
		chai.request(app)
			.get('/api/v1/ah/signup')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.body.should.not.equal(0);
				res.statusCode.should.equal(200);
				done();
			});
	});
});
