import { Controller, Get } from '@nestjs/common';
import { EngWordService } from '@src/res/engWord/engWord.service';

@Controller('/eng-word')
export class EngWordController {
  constructor(private readonly engWordService: EngWordService) {}

  @Get('/main')
  async getMainPage() {
    return this.engWordService.getMainPage();
  }
}
