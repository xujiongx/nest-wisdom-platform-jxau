import { Schema } from 'mongoose';

export const informationSchema = new Schema({
  type: { type: String, required: true },
  title: { type: String, required: false },
  imgUrl: { type: String, required: false },
  context: { type: String, required: true },
  createTime: { type: String, required: true },
});
