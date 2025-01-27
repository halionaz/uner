import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { EngWordEntity } from '@src/entities/eng_word.entity';
import { PartOfSpeechEntity } from '@src/entities/part_of_speech.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('eng_definition')
export class EngDefinitionEntity extends CommonBigPKEntity {
  @Column('text')
  definition: string;

  @ManyToOne(() => EngWordEntity, (word) => word.definitions)
  @JoinColumn({ name: 'word_id', referencedColumnName: 'id' })
  word: EngWordEntity;

  @ManyToOne(() => PartOfSpeechEntity)
  @JoinColumn({ name: 'part_of_speech_id', referencedColumnName: 'id' })
  partOfSpeech: PartOfSpeechEntity;
}
