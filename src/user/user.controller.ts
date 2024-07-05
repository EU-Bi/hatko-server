import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user';
import { ObjectId } from 'mongoose';
import { User } from './user.schema';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signUp(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.userService.signUp(dto);
  }

  @Post('/signin')
  signIn(@Body() dto: CreateUserDto): Promise<{ token: string }> {
    return this.userService.signIn(dto);
  }

  @Put('/edit/:id')
  editUser(
    @Param('id') id: ObjectId,
    @Body()
    dto: CreateUserDto,
  ) {
    return this.userService.editUser(id, dto);
  }

  @Get('/profile/:id')
  getProfile(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
