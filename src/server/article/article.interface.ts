import { Document } from 'mongoose';
import { User } from '../auth/auth.interface';

export interface Article extends Document {
  readonly title: string;
  readonly context: string;
  readonly type: string;
  readonly createTime: string;
  readonly author: User;
}
