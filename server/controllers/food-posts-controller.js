import FoodPost from '../models/food-posts-model.js';

// Named exports
export const getFoodPosts = async (req, res) => {
  try {
    const foodPosts = await FoodPost.find();
    res.status(200).json(foodPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createFoodPosts = async (req, res) => {
  const foodPost = req.body;

  const newFoodPost = new FoodPost(foodPost);

  try {
    await newFoodPost.save();

    res.status(201).json(newFoodPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
