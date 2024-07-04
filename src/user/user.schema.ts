import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserSchema = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  companyInfo: string;
  @Prop()
  name?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
