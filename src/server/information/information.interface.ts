import { Document } from 'mongoose';
import { User } from '../auth/auth.interface';

export interface Information extends Document {
  readonly img_url: string;
  readonly introduce: string;
  readonly createTime: string;
  readonly author: User;
}
