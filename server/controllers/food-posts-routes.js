import express from 'express';
import {
  getFoodPosts,
  getFoodPostsBySearch,
  createFoodPosts,
  updateFoodPost,
  deleteFoodPost,
  likeFoodPost,
} from '../services/food-posts-controller.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getFoodPosts);
router.get('/search', getFoodPostsBySearch);
router.post('/', auth, createFoodPosts);
router.patch('/:id', auth, updateFoodPost);
router.delete('/:id', auth, deleteFoodPost);
router.patch('/:id/likeFoodPost', auth, likeFoodPost);

export default router;
