import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity('user_word_relation')
export class UserWordRelationEntity extends CommonBigPKEntity {
  @Column('int', { nullable: false })
  learnCount: number;

  @Column('timestamp')
  lastReview: Date;

  @Column('timestamp')
  firstLearn: Date;

  @Column('varchar')
  historyBitmask: string;

  @Column('text')
  notes: string;
}
