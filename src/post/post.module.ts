import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostS, PostSchema } from './post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: PostS.name, schema: PostSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
