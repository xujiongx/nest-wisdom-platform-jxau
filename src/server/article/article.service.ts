import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArticleCreateDto, ReviewCreateDto } from './article.dto';
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

  async update(id: string, article: ArticleCreateDto) {
    return await this.articleModel.findByIdAndUpdate(id, article);
  }

  async findByOpenid(openid: string, type: string) {
    return await this.articleModel
      .find({ 'author.openid': openid, type })
      .sort({ _id: -1 });
  }
  async findByType(type: string) {
    return await this.articleModel.find({ type }).sort({ _id: -1 }).limit(10);
  }
  async sortByLove() {
    return await this.articleModel.find().sort({ love: -1 }).limit(5);
  }
  async sortByReviewSize() {
    return await this.articleModel.find().sort({ reviewSize: -1 }).limit(5);
  }
  async praise(id: string) {
    await this.articleModel.findByIdAndUpdate(id, {
      $inc: { love: 1 },
    });
    return await this.articleModel.findById(id);
  }
  async review(id: string, review: ReviewCreateDto) {
    await this.articleModel.findByIdAndUpdate(id, {
      $addToSet: { review: review },
      $inc: { reviewSize: 1 },
    });
    return await this.articleModel.findById(id);
  }
}
