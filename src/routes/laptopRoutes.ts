import express from 'express';
import { getLaptops } from '../controllers/laptopController';

const router = express.Router();

// Rota para obter laptops Lenovo
router.get('/laptops', getLaptops);

export default router;