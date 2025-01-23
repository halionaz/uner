import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { EngWordEntity } from '@src/entities/eng_word.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('eng_example_sentence')
export class EngExampleSentenceEntity extends CommonBigPKEntity {
  @Column('text')
  sentence: string;

  @Column('text')
  translation: string;

  @ManyToOne(() => EngWordEntity, (word) => word.exampleSentences, {
    eager: true,
  })
  @JoinColumn({ name: 'word_id', referencedColumnName: 'id' })
  word: EngWordEntity;
}
