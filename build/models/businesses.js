'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _businesses = require('../dummy_data/businesses');

var _checkdb = require('../helpers/checkdb');

var _checkdb2 = _interopRequireDefault(_checkdb);

var _searchdb = require('../helpers/searchdb');

var _searchdb2 = _interopRequireDefault(_searchdb);

var _averagerating = require('../helpers/averagerating');

var _averagerating2 = _interopRequireDefault(_averagerating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BusinessController
 */
var BusinessModel = function () {
	function BusinessModel() {
		_classCallCheck(this, BusinessModel);
	}

	_createClass(BusinessModel, null, [{
		key: 'createBusiness',

		/**
  * create business
  *@param {*} name The request object.
  *@param {*} categories The request object.
  *@param {*} location The request object.
  *@returns {*} return
  */
		value: function createBusiness(name, categories, location) {
			var busId = _businesses.businesses[_businesses.businesses.length - 1].id + 1;
			_businesses.businesses.push({
				id: busId,
				name: name,
				categories: categories,
				location: location
			});
			return _businesses.businesses[_businesses.businesses.length - 1].id;
		}
		/**
  	* update a business
  	*@param {*} id The request object.
  	*@param {*} name The request object.
  	*@param {*} categories The request object.
  	*@param {*} location The request object.
  	*@returns {*} return
  	*/

	}, {
		key: 'updateBusiness',
		value: function updateBusiness(id, name, categories, location) {
			// check database index to determine if the id given exists in database
			var busIndex = (0, _checkdb2.default)(id, _businesses.businesses);
			if (busIndex === -1) {
				return busIndex;
			}
			// Update existing business
			_businesses.businesses[busIndex] = {
				id: id,
				name: name,
				categories: categories,
				location: location
			};
			return _businesses.businesses[busIndex];
		}
		/**
  * remove business
  *@param {*} id The request object.
  *@returns {*} return
  */

	}, {
		key: 'removeBusiness',
		value: function removeBusiness(id) {
			// search database for index
			var busIndex = (0, _checkdb2.default)(id, _businesses.businesses);
			if (busIndex === -1) {
				return busIndex;
			}
			// delete business
			_businesses.businesses.splice(busIndex, 1);
			return _businesses.businesses;
		}
		/**
  * get a business
  *@param {*} id The request object.
  *@returns {*} return
  */

	}, {
		key: 'getBusiness',
		value: function getBusiness(id) {
			var valid = (0, _checkdb2.default)(id, _businesses.businesses);
			if (valid === -1) {
				return valid;
			}
			return _businesses.businesses[valid];
		}
		/**
  * get all business
  *@param {*} location The request object.
  *@param {*} category The request object.
  *@returns {*} return
  */

	}, {
		key: 'getAllBusiness',
		value: function getAllBusiness(location, category) {
			if (location === ' ' && category === ' ') {
				return _businesses.businesses;
			}
			// search the database for matching indexes
			var matchIndex = (0, _searchdb2.default)(location, category, _businesses.businesses);
			var getBusinesses = matchIndex.map(function (index) {
				return _businesses.businesses[index];
			});
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

	}, {
		key: 'addReview',
		value: function addReview(id, name, rating, comment) {
			var reviewIndex = (0, _checkdb2.default)(id, _businesses.businesses);
			if (reviewIndex === -1) {
				return -1;
			}
			// post the review
			_businesses.reviews[reviewIndex].review.push({
				name: name,
				rating: rating,
				comment: comment
			});
			// calculate average average_rating
			var average = (0, _averagerating2.default)();
			// set average_rating
			_businesses.reviews[reviewIndex].average_rating = average;
			return _businesses.reviews[reviewIndex];
		}
		/**
  * Get all reviews for a business
  *@param {*} id The request object.
  *@returns {*} return
  */

	}, {
		key: 'getReviews',
		value: function getReviews(id) {
			var reviewIndex = (0, _checkdb2.default)(id, _businesses.reviews);
			if (reviewIndex === -1) {
				return -1;
			}
			return _businesses.reviews[reviewIndex].review;
		}
	}]);

	return BusinessModel;
}();

exports.default = BusinessModel;