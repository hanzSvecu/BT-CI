import { businesses, reviews } from '../dummy_data/businesses';
import checkDb from '../helpers/checkdb';
import searchDb from '../helpers/searchdb';
import averageRating from '../helpers/averagerating';


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
	/**
	* remove business
	*@param {*} id The request object.
	*@returns {*} return
	*/
	static removeBusiness(id) {
		// search database for index
		const busIndex = checkDb(id, businesses);
		if (busIndex === -1) {
			return busIndex;
		}
		// delete business
		businesses.splice(busIndex, 1);
		return businesses;
	}
	/**
	* get a business
	*@param {*} id The request object.
	*@returns {*} return
	*/
	static getBusiness(id) {
		const valid = checkDb(id, businesses);
		if (valid === -1) {
			return valid;
		}
		return businesses[valid];
	}
	/**
	* get all business
	*@param {*} location The request object.
	*@param {*} category The request object.
	*@returns {*} return
	*/
	static getAllBusiness(location, category) {
		if (location === ' ' && category === ' ') {
			return businesses;
		}
		// search the database for matching indexes
		const matchIndex = searchDb(location, category, businesses);
		const getBusinesses = matchIndex.map(index => businesses[index]);
		return getBusinesses;
	}
	/**
	* add review for a business
	*@param {*} id The request object.
	*@param {*} name The request object.
	*@param {*} rating The request object.
	*@param {*} comment The request object.
	*@returns {*} return
	*/
	static addReview(id, name, rating, comment) {
		const reviewIndex = checkDb(id, businesses);
		if (reviewIndex === -1) {
			return -1;
		}
		// post the review
		reviews[reviewIndex].review.push({
			name,
			rating,
			comment
		});
		// calculate average average_rating
		const average = averageRating();
		// set average_rating
		reviews[reviewIndex].average_rating = average;
		return reviews[reviewIndex];
	}
	/**
	* Get all reviews for a business
	*@param {*} id The request object.
	*@returns {*} return
	*/
	static getReviews(id) {
		const reviewIndex = checkDb(id, reviews);
		if (reviewIndex === -1) {
			return -1;
		}
		return reviews[reviewIndex].review;
	}
}

export default BusinessModel;
