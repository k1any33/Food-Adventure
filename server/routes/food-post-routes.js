import express from 'express';
import {
  getFoodPosts,
  createFoodPosts,
  updateFoodPost,
  deleteFoodPost,
  likeFoodPost,
} from '../controllers/food-posts-controller.js';

const router = express.Router();

router.get('/', getFoodPosts);
router.post('/', createFoodPosts);
router.patch('/:id', updateFoodPost);
router.delete('/:id', deleteFoodPost);

router.patch('/:id/likeFoodPost', likeFoodPost);

export default router;
