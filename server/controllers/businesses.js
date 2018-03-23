import BusinessModel from '../models/businesses';

/**
 * @class BusinessController
 */
class BusinessController {
	/**
	* Register a business
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static register(req, res) {
		const { name, categories, location } = req.body;
		const busId = BusinessModel.createBusiness(name, categories, location);
		res.status(200).json({ message: `Your business is successfully registered with id: ${busId}` });
	}
}

export default BusinessController;
