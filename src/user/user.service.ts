import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model, ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(dto: CreateUserDto): Promise<{ token: string }> {
    const { email, password, companyInfo } = dto;

    const hashedPassowrd = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      email,
      password: hashedPassowrd,
      companyInfo,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async signIn(dto: CreateUserDto): Promise<{ token: string }> {
    const { email, password } = dto;
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }

  async editUser(id: ObjectId, dto: CreateUserDto) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.email = dto.email;
    user.companyInfo = dto.companyInfo;
    user.name = dto.name;

    await user.save();

    return user;
  }

  async findById(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
