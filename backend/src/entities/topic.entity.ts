import { TopicType } from '@interface/types/word';
import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity('topic')
export class TopicEntity extends CommonBigPKEntity {
  @Column('varchar', { nullable: false })
  name: TopicType;
}
