import chai from 'chai';
import 'chai/register-should';
import checkUser from '../../server/helpers/check';


const { expect } = chai;

describe('validate user in database', () => {
	it('returns false for invalid users', () => {
		const email = 'm@mail.com', password = 'dii';
		const db = [
			{
				email: 'm@mail.com',
				password: 'dii'
			}
		];
		const valid = checkUser(email, password, db);
		expect(valid).to.equal(true);
	});

	it('returns true for valid users', () => {
		const invalid = checkUser();
		expect(invalid).to.equal(false);
	});
});
