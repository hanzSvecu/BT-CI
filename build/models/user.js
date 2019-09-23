'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _users = require('../dummy_data/users');

var _users2 = _interopRequireDefault(_users);

var _check = require('../helpers/check');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class UserModel
 */
var UserModel = function () {
	function UserModel() {
		_classCallCheck(this, UserModel);
	}

	_createClass(UserModel, null, [{
		key: 'createUser',

		/**
  	* createUser
  	*@param {*} name The request object.
  	*@param {*} email The request object.
  	*@param {*} password The request object.
  	*@returns {*} The return object
  	*/
		value: function createUser(name, email, password) {
			var newId = _users2.default[_users2.default.length - 1].id + 1;
			var newUser = {
				id: newId,
				name: name,
				email: email,
				password: password
			};
			// save the user
			_users2.default.push(newUser);
			return _users2.default[_users2.default.length - 1].id;
		}
		/**
  	* login a registerd user
  	*@param {*} email The request object.
  	*@param {*} password The request object.
  	*@returns {*} The return object
  	*/

	}, {
		key: 'logUser',
		value: function logUser(email, password) {
			return (0, _check2.default)(email, password, _users2.default);
		}
	}]);

	return UserModel;
}();

exports.default = UserModel;