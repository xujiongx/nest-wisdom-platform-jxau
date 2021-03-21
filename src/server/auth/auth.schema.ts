import { Schema } from 'mongoose';

export const userSchema = new Schema({
  avatarUrl: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: true },
  language: { type: String, required: true },
  nickName: { type: String, required: true },
  openid: { type: String, required: true },
  province: { type: String, required: true },
  createTime: { type: String, required: true },
});
