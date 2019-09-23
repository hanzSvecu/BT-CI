// Covers all methods of server/controllers/businesses.js
// import jasmine from 'jasmine';
// import businessController from '../server/controllers/businesses.js';

var businesses = require('../server/controllers/businesses.js');

describe("businessControlTest", function(){
    // register
    it("should register business", function() {
        const newBus1 = {
            name: 'Isaac Ajala',
            categories: 'Agric, farming, consumer goods',
            location: '23 Idiroko lane. Iragberi'
        };
        const newBus2 = {
            name: 'Isaac Ajala',
            categories: 'Agric, farming, consumer goods',
            location: '23 Idiroko lane. Iragberi'
        };
        var busRegister = businessController.register(newBus1);
        busRegister.expect('Your business is successfully registered with id: 1');
        var busRegister = businessController.register(newBus2);
        busRegister.expect('Your business is successfully registered with id: 2');
    });
    it("should NOT register business with incomplete data", function() {
        const newBus1 = {
            name: 'Isaac Ajala',
        };
        var busRegister = businessController.register(newBus1);
        busRegister.contains('error');
    });
    // update
    it("should update business", function() {
    });
    it("should NOT update business that doesn't exist", function() {
    });
    // remove
    it("should remove business", function() {
    });
    it("should NOT remove business that doesn't exist", function() {
    });
    // retrieveId
    it("should retrieve business", function() {
    });
    it("should NOT retrieve business that doesn't exist", function() {
    });
    // retrieveAll
    it("should retrieve all businesses", function() {
    });
    it("should return sensible value if there is no business to retrieve", function() {
    });
    // postReview
    it("should add review for existing business", function() {
    });
    it("should NOT add review for non-existing business", function() {
    });
    // getReviewsById
    it("should get all reviews for business", function() {
    });
    it("should get message if the business doesn't exist", function() {
    });
    it("should get sensible response if the business exists but doesn't have any review", function() {
    });
});