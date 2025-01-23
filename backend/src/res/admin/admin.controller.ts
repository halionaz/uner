import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Get('word')
    async getWord() {
        return this.adminService.getWord()
    }

    @Post('word')
    async postWord(@Body() body) {
        // todo: Type Guarding
        const { english, mnemonic, difficulty } = body
        return this.adminService.postWord(english, mnemonic, difficulty)
    }
}