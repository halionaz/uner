import { Module } from '@nestjs/common';
import { EngWordController } from '@src/res/engWord/engWord.controller';
import { EngWordService } from '@src/res/engWord/engWord.service';

@Module({
  imports: [],
  controllers: [EngWordController],
  providers: [EngWordService],
})
export class EngWordModule {}
