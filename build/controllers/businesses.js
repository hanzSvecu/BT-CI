'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // TODO: use original line


var _businesses = require('../models/businesses');

var _businesses2 = _interopRequireDefault(_businesses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var businessController =  require('../models/businesses');

var errorMessage = function errorMessage(res, error) {
	return res.status(404).json({
		error: error
	});
};
var sendDetails = function sendDetails(message, details, res) {
	return res.status(200).json({
		message: message,
		details: details
	});
};
var sendData = function sendData(res, err, data) {
	return data === -1 ? errorMessage(res, err) : res.status(200).json({ data: data });
};

/**
 * @class BusinessController
 */

var BusinessController = function () {
	function BusinessController() {
		_classCallCheck(this, BusinessController);
	}

	_createClass(BusinessController, null, [{
		key: 'register',

		/**
  * Register a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */
		value: function register(req, res) {
			var _req$body = req.body,
			    name = _req$body.name,
			    categories = _req$body.categories,
			    location = _req$body.location;

			var busId = _businesses2.default.createBusiness(name, categories, location);
			res.status(200).json({ message: 'Your business is successfully registered with id: ' + busId });
		}
		/**
  * Update a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'update',
		value: function update(req, res) {
			var id = req.params.id;
			var _req$body2 = req.body,
			    name = _req$body2.name,
			    categories = _req$body2.categories,
			    location = _req$body2.location;

			var updated = _businesses2.default.updateBusiness(id, name, categories, location);
			return updated === -1 ? errorMessage(res, 'Invalid id') : sendDetails('Your information has been updated', updated, res);
		}
		/**
  * Remove a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'remove',
		value: function remove(req, res) {
			var id = req.params.id;

			var removeStatus = _businesses2.default.removeBusiness(id);
			return removeStatus === -1 ? errorMessage(res, 'Invalid id') : sendDetails('Business successfully removed', removeStatus, res);
		}
		/**
  * Get a business by id
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'retrieveId',
		value: function retrieveId(req, res) {
			var getIndex = _businesses2.default.getBusiness(req.params.id);
			sendData(res, 'Business not found', getIndex);
		}
		/**
  * Gt all businesses
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'retrieveAll',
		value: function retrieveAll(req, res) {
			var _req$query = req.query,
			    location = _req$query.location,
			    category = _req$query.category;

			var getBus = _businesses2.default.getAllBusiness(location, category);
			res.status(200);
			res.json({ Business: getBus });
		}
		/**
  * Add a review for a business
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'postReview',
		value: function postReview(req, res) {
			var id = req.params.id;
			var _req$body3 = req.body,
			    name = _req$body3.name,
			    rating = _req$body3.rating,
			    comment = _req$body3.comment;

			var review = _businesses2.default.addReview(id, name, rating, comment);
			return review === -1 ? errorMessage(res, 'Not found') : res.status(200).json({
				id: id,
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

	}, {
		key: 'getReviewsById',
		value: function getReviewsById(req, res) {
			var id = req.params.id;

			var review = _businesses2.default.getReviews(id);
			sendData(res, 'Not a registered Business', review);
		}
	}]);

	return BusinessController;
}();

exports.default = BusinessController;