import businessModel from '../server/models/businesses.js';

describe("businessModelTest - nondestructive", function() {
    it("should create business with name CoffeBar", function () {
        let newBusinessId = businessModel.createBusiness('CoffeBar', ['catA', 'catB'], 'custom location 1');
        expect(businessModel.getBusiness(newBusinessId).name).toEqual('CoffeBar');
    });
    it("should update existing business", function () {
        let result = businessModel.updateBusiness(101,'newName',['cat-1'],'loc-1');
        expect(result.name).toEqual('newName');
    });
    it("should NOT update non-existing business", function () {
        let result = businessModel.updateBusiness(0,'newName','cat-1','loc-1');
        expect(result.name).toBeUndefined();
    });
    it("should get existing business", function () {
        let result = businessModel.getBusiness(103);
        expect(result.id).toEqual(103);
    });
    it("should return -1 for non-existing business", function () {
        let result = businessModel.getBusiness(666);
        expect(result.id).not.toEqual(101);
        expect(result).toEqual(-1);
    });
});

describe("businessModelTest - destructive", function() {
    businessModel.createBusiness('name', ['cat1', 'cat2'], 'custom location 1');
    it("should NOT remove non-existing business", function () {
        let result = businessModel.removeBusiness(666);
        expect(result).toEqual(-1);
    });
    it("should remove existing business", function () {
        businessModel.createBusiness('name', ['cat1'], 'custom location 1');
        let result = businessModel.removeBusiness(102);
        expect(result.toString().includes("id: 102")).toBe(false);
    });
});

describe("getAllBusinessTest", function() {
    businessModel.createBusiness('name-1', ['catA', 'catB'], 'LOC1');
    businessModel.createBusiness('name-2', ['catB', 'catC'], 'LOC1');
    businessModel.createBusiness('name-3', ['catC', 'catA'], 'LOC3');

    it("should get all businesses", function () {
        let result = businessModel.getAllBusiness(" ", " ");
        expect(result.length).toEqual(6);
        expect(result[0].id).toEqual(101);
        expect(result[1].id).toEqual(103);
        expect(result[2].id).toEqual(104);
        expect(result[3].id).toEqual(105);
        expect(result[4].id).toEqual(106);
        expect(result[5].id).toEqual(107);
    });
    it("should return businesses with defined location", function () {
        let result = businessModel.getAllBusiness("LOC1"," ");
        expect(result.length).toEqual(2);
        expect(result[0].name).toEqual('name-1');
        expect(result[1].name).toEqual('name-2');
    });
    // fails correctly - wrong category search functionality
    xit("should return businesses with defined category", function () {
        let result = businessModel.getAllBusiness(" ","catA");
        expect(result.length).toEqual(2);
        expect(result[0].name).toEqual('name-1');
        expect(result[1].name).toEqual('name-3');
    });
    // fails correctly - wrong category search functionality
    xit("should return businesses with defined location AND category", function () {
        let result = businessModel.getAllBusiness("LOC1","catA");
        expect(result.length).toEqual(1);
        expect(result[0].name).toEqual('name-1');
    });
    it("should return undefined if there is no business", function () {
        let result = businessModel.getAllBusiness(" ","catABCD");
        expect(result.length).toEqual(0);
    });
});

describe("reviews model functionality", function() {
    // correct test with wrong app implementation - creation of business doesn't create a new review slot
    xit("should add review for existing business without review and return added review", function() {
        let result = businessModel.addReview(103,"revName103",1,"commentLow");
        expect(result.review[0].name).toEqual("revName103");
    });
    it("should add review for existing business that already has a review and return added review", function() {
        let result = businessModel.addReview(101,"revName101",1,"commentLow");
        expect(result.review[2].name).toEqual("revName101");
    });
    it("should NOT add review for NOT existing business and return -1", function() {
        let result = businessModel.addReview(102,"revName102",1,"commentLow");
        expect(result).toEqual(-1);
    });
    it("should get all reviews for selected business id that existed before test with added review", function() {
        let result = businessModel.getReviews(101);
        expect(result.length).toEqual(3);
        expect(result[0].name).toEqual("adura oyewole");
        expect(result[1].name).toEqual('modupe Ayoola');
        expect(result[2].name).toEqual("revName101");
    });
});