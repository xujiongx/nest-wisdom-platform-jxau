import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleCreateDto, ReviewCreateDto } from './article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post('create')
  async articleCreate(@Body() articleInfo: ArticleCreateDto) {
    return this.articleService.create(articleInfo);
  }
  @Get('findById')
  async articleFindById(@Query('id') id: string) {
    return this.articleService.findById(id);
  }
  @Post('delete')
  async articleDelete(@Body('id') id: string) {
    return this.articleService.delete(id);
  }
  @Post('update')
  async articleFix(
    @Body() articleInfo: ArticleCreateDto,
    @Body('id') id: string,
  ) {
    return this.articleService.update(id, articleInfo);
  }
  @Get('findByOpenid')
  async articleFindByUser(
    @Query('openid') openid: string,
    @Query('type') type: string,
  ) {
    return this.articleService.findByOpenid(openid, type);
  }
  @Get('findByType')
  async articleFindByType(@Query('type') type: string) {
    return this.articleService.findByType(type);
  }
  //点赞
  @Post('praise')
  async articlePraise(@Body('id') id: string) {
    return this.articleService.praise(id);
  }
  //评论
  @Post('review')
  async articleReview(
    @Body('review') review: ReviewCreateDto,
    @Body('id') id: string,
  ) {
    return this.articleService.review(id, review);
  }
}
