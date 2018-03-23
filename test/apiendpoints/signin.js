import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe(' POST /auth/login', () => {
	it('should login a registered user', (done) => {
		const details = {
			email: 'me@email.com',
			password: 'dfr'
		};
		chai.request(app)
			.post('/api/v1/auth/signin')
			.send(details)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.body.should.not.equal(0);
				res.statusCode.should.equal(200);
				done();
			});
	});
});
