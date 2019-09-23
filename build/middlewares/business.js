'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var errorMessage = function errorMessage(res) {
	return res.status(400).json({
		error: 'Bad request'
	});
};
/**
 * @class ValidateBusiness
 */

var ValidateBusiness = function () {
	function ValidateBusiness() {
		_classCallCheck(this, ValidateBusiness);
	}

	_createClass(ValidateBusiness, null, [{
		key: 'register',

		/**
   * Register a business
   *@param {*} req The request *.
   *@param {*} res The request *.
   *@param {*} next next.
   *@returns {*} The return *
   */
		value: function register(req, res, next) {
			var _req$body = req.body,
			    name = _req$body.name,
			    categories = _req$body.categories,
			    location = _req$body.location;

			return !name || !categories || !location ? errorMessage(res) : next();
		}
		/**
  * searh for query
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@param {*} next next.
  *@returns {*} The return *
  */

	}, {
		key: 'search',
		value: function search(req, res, next) {
			var _req$query = req.query,
			    location = _req$query.location,
			    category = _req$query.category;

			req.query.location = !location ? ' ' : location;
			req.query.category = !category ? ' ' : category;
			next();
		}
		/**
   * Post review for a business
   *@param {*} req The request *.
   *@param {*} res The request *.
   *@param {*} next next.
   *@returns {*} The return *
   */

	}, {
		key: 'postReview',
		value: function postReview(req, res, next) {
			var _req$body2 = req.body,
			    name = _req$body2.name,
			    rating = _req$body2.rating,
			    comment = _req$body2.comment;

			if (!name || !rating || !comment) {
				return errorMessage(res);
			}
			next();
		}
	}]);

	return ValidateBusiness;
}();

exports.default = ValidateBusiness;