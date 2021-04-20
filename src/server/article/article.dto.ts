import { User } from '../auth/auth.interface';
import { Revirew } from './article.interface';

export class ArticleCreateDto {
  title: string;
  context: string;
  type: string;
  createTime: string;
  heart: string;
  author: User;
  love?: number;
  review?: Revirew[];
  imgUrl: string;
}

export class ReviewCreateDto {
  author: User;
  createTime: string;
  context: string;
}
