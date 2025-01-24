import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PostWordRequest } from '@interface/apis/admin';

@Controller('/admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('words')
  async getWords() {
    return this.adminService.getWords();
  }

  @Post('words')
  async postWords(@Body() { english, mnemonic, difficulty }: PostWordRequest) {
    // todo: Type Guarding
    return this.adminService.postWords(english, mnemonic, difficulty);
  }
}
