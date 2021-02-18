import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
  } from '@nestjs/common';
  import { CreateUserDTO, EditUserDTO } from './user.dto';
  import { User } from './user.interface';
  import { UserService } from './user.service';
  
  interface UserResponse<T = unknown> {
    code: number;
    data: T;
  }
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    // GET /user/users
    @Get('users')
    async findAll(): Promise<UserResponse<User[]>> {
      return {
        code: 0,
        data: await this.userService.findAll(),
      };
    }
  
    // GET /user/:_id
    @Get(':_id')
    async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
      return {
        code: 0,
        data: await this.userService.findOne(_id),
      };
    }
  
    // POST /user
    @Post()
    async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
      await this.userService.addOne(body);
      return {
        code: 0,
        data:{}
      };
    }
  
    // PUT /user/:_id
    @Put(':_id')
    async editOne(
      @Param('_id') _id: string,
      @Body() body: EditUserDTO
    ): Promise<UserResponse> {
      await this.userService.editOne(_id, body);
      return {
        code: 0,
        data:{}
      };
    }
  
    // DELETE /user/:_id
    @Delete(':_id')
    async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
      await this.userService.deleteOne(_id);
      return {
        code: 0,
        data:{}
      };
    }
  }