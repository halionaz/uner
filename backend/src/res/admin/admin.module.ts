import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngDefinitionEntity } from '@src/entities/eng_definition.entity';
import { EngExampleSentenceEntity } from '@src/entities/eng_example_sentence.entity';
import { EngWordEntity } from '@src/entities/eng_word.entity';
import { ImportanceEntity } from '@src/entities/importance.entity';
import { PartOfSpeechEntity } from '@src/entities/part_of_speech.entity';
import { TopicEntity } from '@src/entities/topic.entity';
import { AdminController } from '@src/res/admin/admin.controller';
import { AdminService } from '@src/res/admin/admin.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EngWordEntity,
      ImportanceEntity,
      PartOfSpeechEntity,
      TopicEntity,
      PartOfSpeechEntity,
      EngDefinitionEntity,
      EngExampleSentenceEntity,
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
