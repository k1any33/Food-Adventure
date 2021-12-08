import express from 'express';
import {
  getFoodPosts,
  createFoodPosts,
} from '../controllers/food-posts-controller.js';

const router = express.Router();

router.get('/', getFoodPosts);
router.post('/', createFoodPosts);

export default router;
