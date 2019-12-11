import userModel from '../server/models/user.js';

// there is no retrieving functionality for user - can be checked only by successful login
describe("userModelTest", function() {
    it("positive - create user", function () {
        let user = userModel.createUser("name1", "name1@company.com", "strongPassword");
        // console.log(user);
        expect(userModel.logUser("name1@company.com", "strongPassword")).toBeTruthy();
    });
    // correct test, wrong implementation
    xit("negative - create user without name", function () {
        let user = userModel.createUser(null, "name2@company.com", "strongPassword");
        expect(userModel.logUser("name2@company.com", "strongPassword")).toBeFalsy();
        // expect(user).toBeUndefined();
    });
    // correct test, wrong implementation
    xit("negative - create user without email", function () {
        let user = userModel.createUser("name3", null, "strongPassword");
        expect(userModel.logUser("", "strongPassword")).toBeFalsy();
        // expect(user).toBeUndefined();
    });
    // correct test, wrong implementation
    xit("negative - create user without password", function () {
        let user = userModel.createUser("name4", "name4@company.com", null);
        expect(userModel.logUser("name4@company.com", "")).toBeFalsy();
        // expect(user).toBeUndefined();
    });
    // correct test, wrong implementation - new user overwrites existing
    xit("negative - create duplicate user", function () {
        let user1 = userModel.createUser("name5", "name5@company.com", "strongPassword");
        // console.log(user1);
        expect(userModel.logUser("name1@company.com", "strongPassword")).toBeTruthy();
        let user2 = userModel.createUser("name5", "name5@company.com", "strongPassword");
        // console.log(user2);
        expect(user1).toBeDefined();
        expect(user2).toBeUndefined();
    });
    // correct test, wrong implementation - user should not be ale to log in with wrong password
    xit("negative - login with wrong password", function () {
        let user = userModel.createUser("name6", "name6@company.com", "strongPassword");
        expect(userModel.logUser("name6@company.com", "wrongPassword")).toBeFalsy();
    });
    // correct test, wrong implementation - it should not be possible to login with user that was not registered
    xit("negative - login with non-existing email", function () {
        expect(userModel.logUser("666@666.com", "abc")).toBeFalsy();
    });
});
