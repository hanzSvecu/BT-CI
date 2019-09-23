'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _businesses = require('../controllers/businesses');

var _businesses2 = _interopRequireDefault(_businesses);

var _business = require('../middlewares/business');

var _business2 = _interopRequireDefault(_business);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Register a business
router.post('/', _business2.default.register, _businesses2.default.register);
// Update a business
router.put('/:id', _business2.default.register, _businesses2.default.update);
// Delete a business
router.delete('/:id', _businesses2.default.remove);
// Get a business
router.get('/:id', _businesses2.default.retrieveId);
// Get all businesses
router.get('/', _business2.default.search, _businesses2.default.retrieveAll);
//  Add review for a business
router.post('/:id/reviews', _business2.default.postReview, _businesses2.default.postReview);
// Get all reviews for a business
router.get('/:id/reviews', _businesses2.default.getReviewsById);

exports.default = router;