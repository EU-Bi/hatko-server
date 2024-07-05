import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post';
import { AuthGuard } from '@nestjs/passport';
import { PostS } from './post.schema';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getAll(): Promise<PostS[]> {
    // We can add pagination
    return this.postService.getAll();
  }
  @Post()
  @UseGuards(AuthGuard())
  create(
    @Body()
    dto: CreatePostDto,
    @Req() req,
  ): Promise<PostS> {
    return this.postService.create(dto, req._id);
  }
}
