import { Module, forwardRef } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./user.schema";


@Module({
    imports: [
        MongooseModule.forFeature([{ name: "User", schema: UserSchema }])
        forwardRef(() => )
    ],
    controllers: [],
    providers: [],
})
export class UserModule {}