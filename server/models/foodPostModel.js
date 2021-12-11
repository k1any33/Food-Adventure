import mongoose from 'mongoose';

const foodPostSchema = mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const FoodPost = mongoose.model('FoodPost', foodPostSchema);

export default FoodPost;
