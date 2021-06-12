import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = 'https://xujiong.cn.utools.club';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async fileUpload(@UploadedFile('file') file: any) {
    return `${SERVER_URL}/uploads/${file.filename}`;
  }
}
