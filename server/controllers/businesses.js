import BusinessModel from '../models/businesses';

const errorMessage = (res, error) => res.status(404).json({
	error
});
const sendDetails = (message, details, res) => res.status(200).json({
	message,
	details
});
const sendData = (res, err, data) => (
	(data === -1) ? errorMessage(res, err) : res.status(200).json({ data }));


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
	/**
	* Remove a business
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static remove(req, res) {
		const { id } = req.params;
		const removeStatus = BusinessModel.removeBusiness(id);
		return (removeStatus === -1) ? errorMessage(res, 'Invalid id') : sendDetails('Business successfully removed', removeStatus, res);
	}
	/**
	* Get a business by id
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static retrieveId(req, res) {
		const getIndex = BusinessModel.getBusiness(req.params.id);
		sendData(res, 'Business not found', getIndex);
	}
	/**
	* Gt all businesses
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static retrieveAll(req, res) {
		const { location, category } = req.query;
		const getBus = BusinessModel.getAllBusiness(location, category);
		res.status(200);
		res.json({ Business: getBus });
	}
	/**
	* Add a review for a business
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static postReview(req, res) {
		const { id } = req.params;
		const { name, rating, comment } = req.body;
		const review = BusinessModel.addReview(id, name, rating, comment);
		return (review === -1) ? errorMessage(res, 'Not found') : res.status(200).json({
			id,
			message: 'Review sent. Thank you',
			details: review
		});
	}
	/**
	*  Get all reviews for a business
	*@param {*} req The request *.
	*@param {*} res The request *.
	*@returns {undefined} The return *
	*/
	static getReviewsById(req, res) {
		const { id } = req.params;
		const review = BusinessModel.getReviews(id);
		sendData(res, 'Not a registered Business', review);
	}
}

export default BusinessController;
