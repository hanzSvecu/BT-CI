import users from '../dummy_data/users';
import checkUser from '../helpers/check';

/**
 * @class UserModel
 */
class UserModel {
	/**
 	* createUser
 	*@param {*} name The request object.
 	*@param {*} email The request object.
 	*@param {*} password The request object.
 	*@returns {*} The return object
 	*/
	static createUser(name, email, password) {
		const newId = users[users.length - 1].id + 1;
		const newUser = {
			id: newId,
			name,
			email,
			password
		};
		// save the user
		users.push(newUser);
		return users[(users.length) - 1].id;
	}
	/**
 	* login a registerd user
 	*@param {*} email The request object.
 	*@param {*} password The request object.
 	*@returns {*} The return object
 	*/
	static logUser(email, password) {
		return checkUser(email, password, users);
	}
}

export default UserModel;
