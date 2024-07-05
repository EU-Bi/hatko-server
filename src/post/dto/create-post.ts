import { User } from 'src/user/user.schema';

export class CreatePostDto {
  title: string;
  content: string;
  user: User;
}
