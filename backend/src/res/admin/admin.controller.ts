import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { PostWordRequest } from "@interface/apis/admin";

@Controller('/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Get('word')
    async getWord() {
        return this.adminService.getWord()
    }

    @Post('word')
    async postWord(@Body() { english, mnemonic, difficulty }: PostWordRequest) {
        // todo: Type Guarding
        return this.adminService.postWord(english, mnemonic, difficulty)
    }
}