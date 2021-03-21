import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleCreateDto } from './article.dto';
import { Article } from './article.interface';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}
  async create(article: ArticleCreateDto) {
    return await this.articleModel.create(article);
  }
  async findById(id: string) {
    return await this.articleModel.findById(id);
  }
  async delete(id: string) {
    return await this.articleModel.deleteOne({ _id: id });
  }

  async fix(id: string, article: any) {
    return await this.articleModel.findByIdAndDelete(id, article);
  }

  async findByOpenid(openid: string) {
    return await this.articleModel.find({ 'author.openid': openid });
  }
}
