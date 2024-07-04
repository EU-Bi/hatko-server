import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async getAll(): Promise<Post[]> {
    const posts = await this.postModel.find();
    return posts;
  }
  async create(dto: CreatePostDto): Promise<Post> {
    const post = await this.postModel.create({ ...dto });
    return post;
  }
}
