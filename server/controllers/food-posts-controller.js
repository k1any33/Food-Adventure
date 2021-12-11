import mongoose from 'mongoose';
import FoodPost from '../models/foodPostModel.js';

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

export const updateFoodPost = async (req, res) => {
  const { id: _id } = req.params;
  const foodPost = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No Food Post with that ID!');

  const updatedFoodPost = await FoodPost.findByIdAndUpdate(
    _id,
    { ...foodPost, _id },
    {
      new: true,
    }
  );
  res.json(updatedFoodPost);
};

export const deleteFoodPost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No Food Post with that ID!');

  await FoodPost.findByIdAndRemove(_id);

  res.json({ message: 'Food post is deleted' });
};

export const likeFoodPost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Food Post with that ID!');

  const foodPost = await FoodPost.findById(id);

  const index = foodPost.likes.findIndex((id) => id == String(req.userId));

  if (index == -1) {
    // like
    foodPost.likes.push(req.userId);
  } else {
    //dislike
    foodPost.likes = foodPost.likes.filter((id) => id != String(req.userId));
  }

  const updatedFoodPost = await FoodPost.findByIdAndUpdate(id, foodPost, {
    new: true,
  });

  res.json(updatedFoodPost);
};
