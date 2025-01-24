import { GetWordsRequest, PostAnswerRequest } from '@interface/apis/eng-to-kor';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EngToKorService } from '@src/res/engToKor/engToKor.service';

@Controller('/eng-to-kor')
export class EngToKorController {
  constructor(private readonly engToKorService: EngToKorService) {}

  @Get('words')
  async getWords(@Param() params: GetWordsRequest) {
    return this.engToKorService.getWords(params);
  }

  @Post('answer')
  async postAnswer(@Body() { givenWord, userPrompt }: PostAnswerRequest) {
    return this.engToKorService.postAnswer(givenWord, userPrompt);
  }
}
