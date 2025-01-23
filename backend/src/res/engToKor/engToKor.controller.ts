import { PostAnswerRequest } from '@interface/apis/eng-to-kor';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EngToKorService } from '@src/res/engToKor/engToKor.service';

@Controller('/eng-to-kor')
export class EngToKorController {
  constructor(private readonly engToKorService: EngToKorService) { }

  @Get('/words')
  async getWords() {
    return this.engToKorService.getWords();
  }

  @Post('/answer')
  async postAnswer(
    @Body() { givenWord, userPrompt }: PostAnswerRequest,
  ) {

    return this.engToKorService.postAnswer(givenWord, userPrompt);
  }
}
