import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostS } from './post.schema';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(PostS.name) private postModel: Model<PostS>) {}
  async getAll(): Promise<PostS[]> {
    // We can add pagination
    const posts = await this.postModel.find();
    return posts;
  }
  async create(post: PostS, user: User): Promise<PostS> {
    const data = Object.assign(post, { user: user });

    const res = await this.postModel.create(data);
    return res;
  }
}
