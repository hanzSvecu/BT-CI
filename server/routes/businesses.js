import express from 'express';
import BusinessController from '../controllers/businesses';
import ValidateBusiness from '../middlewares/business';

const router = express.Router();
// Register a business
router.post('/', ValidateBusiness.register, BusinessController.register);
// Update a business
router.put('/:id', ValidateBusiness.register, BusinessController.update);
// Delete a business
router.delete('/:id', BusinessController.remove);
// Get a business
router.get('/:id', BusinessController.retrieveId);
// Get all businesses
router.get('/', ValidateBusiness.search, BusinessController.retrieveAll);
//  Add review for a business
router.post('/:id/reviews', ValidateBusiness.postReview, BusinessController.postReview);


export default router;
