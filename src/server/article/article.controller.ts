import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleCreateDto } from './article.dto';
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
}
