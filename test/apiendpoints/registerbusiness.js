import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('POST /businesses/', () => {
	it('should register a business', (done) => {
		const newBus = {
			name: 'Isaac Ajala',
			categories: 'Agric, farming, consumer goods',
			location: '23 Idiroko lane. Iragberi'
		};
		chai.request(app)
			.post('/api/v1/businesses')
			.send(newBus)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('message');
				res.body.message.should.equal('Your business is successfully registered with id: 102');
				res.statusCode.should.equal(200);
				done();
			});
	});
	it('should not register a business', (done) => {
		const newBus = {
		};
		chai.request(app)
			.post('/api/v1/businesses')
			.send(newBus)
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.body.error.should.equal('Bad request');
				res.statusCode.should.equal(400);
				done();
			});
	});
});
