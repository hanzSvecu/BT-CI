import express from 'express';
import BusinessController from '../controllers/businesses';
import ValidateBusiness from '../middlewares/business';

const router = express.Router();
// Register a business
router.post('/', ValidateBusiness.register, BusinessController.register);

export default router;
