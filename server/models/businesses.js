import { businesses } from '../dummy_data/businesses';

/**
 * @class BusinessController
 */
class BusinessModel {
	/**
	* create business
	*@param {*} name The request object.
	*@param {*} categories The request object.
	*@param {*} location The request object.
	*@returns {*} return
	*/
	static createBusiness(name, categories, location) {
		const busId = businesses[businesses.length - 1].id + 1;
		businesses.push({
			id: busId,
			name,
			categories,
			location
		});
		return businesses[businesses.length - 1].id;
	}
}

export default BusinessModel;
