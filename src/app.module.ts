import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './server/auth/auth.module';
import { ArticleModule } from './server/article/article.module';

const DB_URL =
  'mongodb+srv://admin:a11049900@cluster0.xql4k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(DB_URL), AuthModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
