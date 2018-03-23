import { businesses } from '../dummy_data/businesses';
import checkDb from '../helpers/checkdb';
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
	/**
		* update a business
		*@param {*} id The request object.
		*@param {*} name The request object.
		*@param {*} categories The request object.
		*@param {*} location The request object.
		*@returns {*} return
		*/
	static updateBusiness(id, name, categories, location) {
		// check database index to determine if the id given exists in database
		const busIndex = checkDb(id, businesses);
		if (busIndex === -1) {
			return busIndex;
		}
		// Update existing business
		businesses[busIndex] = {
			id,
			name,
			categories,
			location
		};
		return businesses[busIndex];
	}
}

export default BusinessModel;
