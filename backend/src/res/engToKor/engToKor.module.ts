import { Module } from '@nestjs/common';
import { EngToKorController } from '@src/res/engToKor/engToKor.controller';
import { EngToKorService } from '@src/res/engToKor/engToKor.service';

@Module({
  imports: [],
  controllers: [EngToKorController],
  providers: [EngToKorService],
})
export class EngToKorModule {}
