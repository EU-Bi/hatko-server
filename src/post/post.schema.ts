import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostDocument = HydratedDocument<PostS>;

@Schema()
export class PostS {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}
export const PostSchema = SchemaFactory.createForClass(PostS);
