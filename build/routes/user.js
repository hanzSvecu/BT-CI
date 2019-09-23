'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('../middlewares/user');

var _user4 = _interopRequireDefault(_user3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/signup', _user4.default.create, _user2.default.create);
router.post('/signin', _user4.default.login, _user2.default.login);

exports.default = router;