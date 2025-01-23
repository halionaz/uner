import { Column, Entity } from 'typeorm';
import { PartOfSpeechType } from '@interface/word';
import { CommonBigPKEntity } from '@src/entities/common/common.entity';

@Entity('part_of_speech')
export class PartOfSpeechEntity extends CommonBigPKEntity {
  @Column('varchar', { length: 20 })
  name: PartOfSpeechType;
}
