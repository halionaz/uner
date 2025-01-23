import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { EngWordModule } from '@src/res/engWord/engWord.module';

@Module({
  imports: [EngWordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
