import { HttpService, Injectable } from '@nestjs/common';
import { APPID, SECRET } from '../../const/auth'

@Injectable()
export class AuthService {
    constructor(private httpService: HttpService) { }
    getSession(code: string) {
        if (!code) {
            return 'code不能为空'
        } else {
            let sessionUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
            return this.httpService.get(sessionUrl)
        }
    }
    login(userInfo: {}) {
        if (!userInfo) {
            return '用户消息不能为空'
        } else {
            //储存到数据库

            return { userId: '10000001' }
        }
    }
}
