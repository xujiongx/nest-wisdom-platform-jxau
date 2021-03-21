import { User } from '../auth/auth.interface';

export class ArticleCreateDto {
  title: string;
  context: string;
  type: string;
  createTime: string;
  heart: string;
  author: User;
}
