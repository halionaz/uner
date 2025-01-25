import { RelationType } from '@interface/types/word';
import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { EngWordEntity } from '@src/entities/eng_word.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('eng_relation')
export class EngRelationEntity extends CommonBigPKEntity {
  @Column('varchar', { length: 20, nullable: false })
  relationType: RelationType;

  @ManyToOne(() => EngWordEntity, (word) => word.relatedWords, {
    eager: true,
  })
  @JoinColumn({ name: 'word_id', referencedColumnName: 'id' })
  word: EngWordEntity;

  @ManyToOne(() => EngWordEntity, (word) => word.relatedWords, {
    eager: true,
  })
  @JoinColumn({ name: 'relation_word_id', referencedColumnName: 'id' })
  relationWord: EngWordEntity;
}
