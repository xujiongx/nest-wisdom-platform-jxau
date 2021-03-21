import { Document } from 'mongoose';

export interface User extends Document {
  readonly avatarUrl: string;
  readonly city: string;
  readonly country: string;
  readonly gender: string;
  readonly language: string;
  readonly nickName: string;
  readonly openid: string;
  readonly province: string;
  readonly createTime: string;
}
