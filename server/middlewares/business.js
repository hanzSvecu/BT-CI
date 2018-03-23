const errorMessage = res => res.status(400).json({
	error: 'Bad request'
});
/**
 * @class ValidateBusiness
 */
class ValidateBusiness {
	/**
  * Register a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@param {*} next next.
  *@returns {*} The return *
  */
	static register(req, res, next) {
		const { name, categories, location } = req.body;
		return (!name || !categories || !location) ? errorMessage(res) : next();
	}
	/**
	* searh for query
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@param {*} next next.
	*@returns {*} The return *
	*/
	static search(req, res, next) {
		const { location, category } = req.query;
		req.query.location = (!location) ? ' ' : location;
		req.query.category = (!category) ? ' ' : category;
		next();
	}
	/**
  * Post review for a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@param {*} next next.
  *@returns {*} The return *
  */
	static postReview(req, res, next) {
		const { name, rating, comment } = req.body;
		if (!name || !rating || !comment) {
			return errorMessage(res);
		}
		next();
	}
}

export default ValidateBusiness;
