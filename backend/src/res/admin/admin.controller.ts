import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetImportanceResponse, PostWithNameRequest, PostWordRequest } from '@interface/apis/admin';
import { AdminService } from '@src/res/admin/admin.service';
import { isImportanceType } from '@interface/types/word';

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

  @Get('importance')
  async getImportance() {
    const importanceArray = await this.adminService.getImportance();
    const ret: GetImportanceResponse = importanceArray.map((importance) => ({
      id: importance.id,
      name: importance.name,
    }));
    return ret;
  }

  @Post('importance')
  async postImportance(@Body() { name }: PostWithNameRequest) {
    if (isImportanceType(name)) return this.adminService.postImportance(name);
  }
}
