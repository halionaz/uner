import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  GetImportanceResponse,
  GetPartOfSpeechResponse,
  GetTopicsResponse,
  PostWithNameRequest,
  PostWordRequest,
} from '@interface/apis/admin';
import { AdminService } from '@src/res/admin/admin.service';
import { isImportanceType, isPartOfSpeechType, isTopicType } from '@interface/types/word';

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
  @Get('part-of-speech')
  async getPartOfSpeech() {
    const partOfSpeechArray = await this.adminService.getPartOfSpeech();
    const ret: GetPartOfSpeechResponse = partOfSpeechArray.map(({ id, name }) => ({ id, name }));
    return ret;
  }
  @Get('topic')
  async getTopic() {
    const topicArray = await this.adminService.getTopics();
    const ret: GetTopicsResponse = topicArray.map(({ id, name }) => ({ id, name }));
    return ret;
  }

  @Post('importance')
  async postImportance(@Body() { name }: PostWithNameRequest) {
    if (isImportanceType(name)) return this.adminService.postImportance(name);
  }
  @Post('part-of-speech')
  async postPartOfSpeech(@Body() { name }: PostWithNameRequest) {
    if (isPartOfSpeechType(name)) return this.adminService.postPartOfSpeech(name);
  }
  @Post('topic')
  async postTopic(@Body() { name }: PostWithNameRequest) {
    if (isTopicType(name)) return this.adminService.postTopic(name);
  }
}
