import { Schema } from 'mongoose';

export const userSchema = new Schema({
  avatarUrl: { type: String, required: true },
  city: { type: String, required: false },
  country: { type: String, required: false },
  gender: { type: String, required: false },
  language: { type: String, required: false },
  nickName: { type: String, required: false },
  openid: { type: String, required: true },
  province: { type: String, required: false },
  createTime: { type: String, required: true },
});
