import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.ujoh2pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    PostModule,
    UserModule,
  ],
})
export class AppModule {}
