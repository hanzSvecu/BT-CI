const errorMessage = res => res.status(400).json({
	error: 'Bad request'
});
/**
 * @class ValidateUser
 */
class ValidateUser {
	/**
  * Register a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@param {*} next next.
  *@returns {*} The return *
  */
	static create(req, res, next) {
		const { name } = req.body;
		const { password, email } = req.body;
		return (!name || !password || !email) ? errorMessage(res) : next();
	}
	/**
  * Add review for a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@param {*} next next.
  *@returns {*} The return *
  */
	static login(req, res, next) {
		const { email, password } = req.body;
		return (!email || !password) ? errorMessage(res) : next();
	}
}

export default ValidateUser;
