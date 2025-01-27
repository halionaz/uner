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
  async postWords(@Body() request: PostWordRequest) {
    // todo: Type Guarding
    return this.adminService.postWords(request);
  }

  @Get('importance')
  async getImportance() {
    const importanceArray = await this.adminService.getImportance();
    return importanceArray;
  }
  @Get('part-of-speech')
  async getPartOfSpeech() {
    const partOfSpeechArray = await this.adminService.getPartOfSpeech();
    return partOfSpeechArray;
  }
  @Get('topic')
  async getTopic() {
    const topicArray = await this.adminService.getTopics();
    return topicArray;
  }

  @Post('importance')
  async postImportance(@Body() { name }: PostWithNameRequest) {
    return this.adminService.postImportance(name);
  }
  @Post('part-of-speech')
  async postPartOfSpeech(@Body() { name }: PostWithNameRequest) {
    return this.adminService.postPartOfSpeech(name);
  }
  @Post('topic')
  async postTopic(@Body() { name }: PostWithNameRequest) {
    return this.adminService.postTopic(name);
  }
}
