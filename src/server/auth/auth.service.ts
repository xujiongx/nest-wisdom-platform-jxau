import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { APPID, SECRET } from '../../const/auth';
import { User } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<User>,
    private httpService: HttpService,
  ) {}
  async getSession(code: string) {
    if (!code) {
      return 'code不能为空';
    } else {
      const sessionUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`;
      const resp = await this.httpService.get(sessionUrl).toPromise();
      return resp.data;
    }
  }
  async login(userInfo: User) {
    if (!userInfo) {
      return '用户消息不能为空';
    } else {
      const loginUser = await this.userModel.findOne({
        openid: userInfo.openid,
      });
      console.log(111, loginUser);
      if (!loginUser) {
        // 储存到数据库
        await this.userModel.create(userInfo);
      } else {
        const userId = loginUser._id;
        return { userId };
      }
    }
  }
}
