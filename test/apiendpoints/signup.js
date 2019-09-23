import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('POST /auth/signup', () => {
	it('should register a business', (done) => {
		const newUser = {
			name: 'bisi alawiye',
			email: 'bisi@gmail',
			password: 'lmn'
		};
		chai.request(app)
			.post('/api/v1/auth/signup')
			.send(newUser)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should return bad request error', (done) => {
		const newUser = {
			namef: 'bisi alawiye',
			email: 'bisi@gmail',
			password: 'lmn'
		};
		chai.request(app)
			.post('/api/v1/auth/signup')
			.send(newUser)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.statusCode.should.equal(400);
				done();
			});
	});
});
