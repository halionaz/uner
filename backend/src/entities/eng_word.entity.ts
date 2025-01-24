import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { EngDefinitionEntity } from '@src/entities/eng_definition.entity';
import { EngExampleSentenceEntity } from '@src/entities/eng_example_sentence.entity';
import { EngRelationEntity } from '@src/entities/eng_relation.entity';
import { ImportanceEntity } from '@src/entities/importance.entity';
import { TopicEntity } from '@src/entities/topic.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('eng_word')
export class EngWordEntity extends CommonBigPKEntity {
  @Column('varchar', { length: 50, nullable: false, unique: true })
  english: string;

  @Column('text')
  mnemonic: string;

  @Column('int')
  difficulty: number;

  @ManyToMany(() => ImportanceEntity, { cascade: true })
  @JoinTable({
    name: 'eng_importance',
    joinColumn: {
      name: 'word_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'importance_id',
      referencedColumnName: 'id',
    },
  })
  importance: ImportanceEntity[];

  @ManyToMany(() => TopicEntity, { cascade: true })
  @JoinTable({
    name: 'eng_topic',
    joinColumn: {
      name: 'word_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'topic_id',
      referencedColumnName: 'id',
    },
  })
  @OneToMany(() => EngExampleSentenceEntity, (exampleSentence) => exampleSentence.word)
  exampleSentences: EngExampleSentenceEntity[];

  @OneToMany(() => EngDefinitionEntity, (definition) => definition.word)
  definitions: EngDefinitionEntity[];

  @OneToMany(() => EngRelationEntity, (relation) => relation.word)
  relatedWords: EngRelationEntity[];
}
