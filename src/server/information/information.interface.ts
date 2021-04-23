import { Document } from 'mongoose';

export interface Information extends Document {
  readonly imgUrl?: string;
  readonly context: string;
  readonly createTime: string;
  readonly title?: string;
  readonly type: string;
}
