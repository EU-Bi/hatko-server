import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from '../user.module';

@Module({
  imports: [forwardRef(() => UserModule),Passpo],
})
export class AuthModule {}
