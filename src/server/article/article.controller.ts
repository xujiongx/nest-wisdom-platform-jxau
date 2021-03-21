import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { identity } from 'rxjs';
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
  @Post('fix')
  async articleFix(
    @Body() articleInfo: ArticleCreateDto,
    @Body('id') id: string,
  ) {
    return this.articleService.fix(id, articleInfo);
  }
  @Get('findByOpenid')
  async articleFindByUser(@Query('openid') openid: string) {
    return this.articleService.findByOpenid(openid);
  }
}
