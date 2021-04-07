import { Schema } from 'mongoose';
import { userSchema } from '../auth/auth.schema';

export const ReviewSchema = new Schema({
  author: { type: userSchema, required: true },
  context: { type: String, required: true },
  createTime: { type: String, required: true },
});

export const articleSchema = new Schema({
  title: { type: String, required: true },
  context: { type: String, required: true },
  type: { type: String, required: true },
  createTime: { type: String, required: true },
  lastCreateTime: { type: String, required: false },
  author: { type: userSchema, required: false },
  love: { type: Number, default: 0 },
  review: { type: [ReviewSchema], default: [] },
  reviewSize: { type: Number, default: 0 },
});
