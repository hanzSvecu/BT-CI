import express from 'express';
import BusinessController from '../controllers/businesses';
import ValidateBusiness from '../middlewares/business';

const router = express.Router();
// Register a business
router.post('/', ValidateBusiness.register, BusinessController.register);
// Update a business
router.put('/:id', ValidateBusiness.register, BusinessController.update);

export default router;
