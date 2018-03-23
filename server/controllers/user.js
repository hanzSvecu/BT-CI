import UserModel from '../models/user';

/**
 * @class UserController
 */
class UserController {
	/**
	* Register a user
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static create(req, res) {
		const { name, password, email } = req.body;
		const newId = UserModel.createUser(name, email, password);
		res.json({ message: `New user created succesfully with id: ${newId}` });
	}
}

export default UserController;
