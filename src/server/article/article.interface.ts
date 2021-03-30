import { Document } from 'mongoose';
import { User } from '../auth/auth.interface';

export interface Revirew extends Document {
  readonly author: User;
  readonly createTime: string;
  readonly context: string;
}

export interface Article extends Document {
  readonly title: string;
  readonly context: string;
  readonly type: string;
  readonly createTime: string;
  readonly author: User;
  readonly love?: number;
  readonly review?: Revirew[];
}
