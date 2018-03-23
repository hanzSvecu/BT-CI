import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);

describe('DELETE /business/<businessid>', () => {
	before((done) => {
		const newBus = {
			name: 'Isaac Ajala',
			categories: 'Agric, farming, consumer goods',
			location: '23 Idiroko lane. Iragberi'
		};
		chai.request(app)
			.post('/api/v1/businesses')
			.send(newBus);
		done();
	});
	it('should remove a business', (done) => {
		chai.request(app)
			.delete('/api/v1/businesses/102')
			.end((err, res) => {
				res.statusCode.should.equal(200);
				res.body.should.have.property('message');
				res.body.message.should.equal('Business successfully removed');
				done();
			});
	});
	it('shold return an error if business id is invalid', (done) => {
		chai.request(app)
			.delete('/api/v1/businesses/106')
			.end((err, res) => {
				res.body.should.be.a('object');
				res.body.should.have.property('error');
				res.body.error.should.equal('Invalid id');
				res.statusCode.should.equal(404);
				done();
			});
	});
});
