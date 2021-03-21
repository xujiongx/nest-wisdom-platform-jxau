import { Schema } from 'mongoose';
import { userSchema } from '../auth/auth.schema';

export const articleSchema = new Schema({
  title: { type: String, required: true },
  context: { type: String, required: true },
  type: { type: String, required: true },
  createTime: { type: String, required: true },
  lastCreateTime: { type: String, required: false },
  author: { type: userSchema, required: false },
});
