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
 * @class ValidateUser
 */

var ValidateUser = function () {
  function ValidateUser() {
    _classCallCheck(this, ValidateUser);
  }

  _createClass(ValidateUser, null, [{
    key: 'create',

    /**
     * Register a business
     *@param {*} req The request *.
     *@param {*} res The request *.
     *@param {*} next next.
     *@returns {*} The return *
     */
    value: function create(req, res, next) {
      var name = req.body.name;
      var _req$body = req.body,
          password = _req$body.password,
          email = _req$body.email;

      return !name || !password || !email ? errorMessage(res) : next();
    }
    /**
     * Add review for a business
     *@param {*} req The request *.
     *@param {*} res The request *.
     *@param {*} next next.
     *@returns {*} The return *
     */

  }, {
    key: 'login',
    value: function login(req, res, next) {
      var _req$body2 = req.body,
          email = _req$body2.email,
          password = _req$body2.password;

      return !email || !password ? errorMessage(res) : next();
    }
  }]);

  return ValidateUser;
}();

exports.default = ValidateUser;