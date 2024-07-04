import { Body, Controller, Post } from "@nestjs/common";

@Controller('/auth')
export class UserController {
    constructor() {}

    @Post('/signup')
    signup(@Body() dto: CreateUserDto) {
        return this.dto.
    }
}