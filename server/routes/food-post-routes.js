import express from 'express';
import {
  getFoodPosts,
  createFoodPosts,
  updateFoodPost,
} from '../controllers/food-posts-controller.js';

const router = express.Router();

router.get('/', getFoodPosts);
router.post('/', createFoodPosts);
router.patch('/:id', updateFoodPost);

export default router;
