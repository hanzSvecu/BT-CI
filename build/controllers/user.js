'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class UserController
 */
var UserController = function () {
	function UserController() {
		_classCallCheck(this, UserController);
	}

	_createClass(UserController, null, [{
		key: 'create',

		/**
  * Register a user
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */
		value: function create(req, res) {
			var _req$body = req.body,
			    name = _req$body.name,
			    password = _req$body.password,
			    email = _req$body.email;

			var newId = _user2.default.createUser(name, email, password);
			res.json({ message: 'New user created succesfully with id: ' + newId });
		}
		/**
  * login a user
  *@param {*} req The request *.
  *@param {*} res The request *.
  *@returns {undefined} The return *
  */

	}, {
		key: 'login',
		value: function login(req, res) {
			var _req$body2 = req.body,
			    email = _req$body2.email,
			    password = _req$body2.password;

			var message = _user2.default.logUser(email, password) ? { message: 'You are succesfully logged in' } : { message: 'invalid details' };
			res.json({ message: message });
		}
	}]);

	return UserController;
}();

exports.default = UserController;