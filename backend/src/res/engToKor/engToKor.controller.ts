import { Body, Controller, Get, Post } from '@nestjs/common';
import { EngToKorService } from '@src/res/engToKor/engToKor.service';

@Controller('/eng-to-kor')
export class EngToKorController {
  constructor(private readonly engToKorService: EngToKorService) {}

  @Get('/words')
  async getWords() {
    return this.engToKorService.getWords();
  }

  @Post('/answer')
  async postAnswer(
    @Body('givenWord') givenWord: string,
    @Body('userPrompt') userPrompt: string,
  ) {
    return this.engToKorService.postAnswer(givenWord, userPrompt);
  }
}
