import BusinessModel from '../models/businesses';

const errorMessage = (res, error) => res.status(404).json({
	error
});
const sendDetails = (message, details, res) => res.status(200).json({
	message,
	details
});

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
	/**
	* Update a business
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static update(req, res) {
		const { id } = req.params;
		const { name, categories, location } = req.body;
		const updated = BusinessModel.updateBusiness(id, name, categories, location);
		return (updated === -1) ? errorMessage(res, 'Invalid id') : sendDetails('Your information has been updated', updated, res);
	}
}

export default BusinessController;
