// Covers all methods of server/controllers/businesses.js
// import jasmine from 'jasmine';

// UNIT TESTS

import checkUser from '../server/helpers/check';
import checkDb from '../server/helpers/checkdb';
import searchDb from '../server/helpers/searchdb';
import businesses from '../server/dummy_data/businesses';

const db = [
    {
        email: 'm@mail.com',
        password: 'dii'
    }
];

describe("helperTest", function(){

    describe('validate user in database', () => {

        it('returns true for valid users', () => {
            const email = 'm@mail.com', password = 'dii';

            const valid = checkUser(email, password, db);
            expect(valid).toEqual(true);
        });

        it('returns false for empty user', () => {
            const valid = checkUser();
            expect(valid).toEqual(false);
        });

        xit('returns false for invalid user name', () => {
            const email = 'mXXX@mail.com', password = 'dii';
            const valid = checkUser(email, password, db);
            expect(valid).toEqual(false);
        });

        xit('returns false for invalid password', () => {
            const email = 'm@mail.com', password = 'diiXXX';
            const valid = checkUser(email, password, db);
            expect(valid).toEqual(false);
        });
    });

    // TODO: REWORK!!!
    describe('searchDb function', () => {
        it('should return location', () => {
            const result = searchDb('Uganda', 'tech', businesses.businesses);
            expect(result).toEqual([ 0 ]);
        });
    });




});