import { Column, Entity } from 'typeorm';
import { ImportanceType } from '@interface/types/word';
import { CommonBigPKEntity } from '@src/entities/common/common.entity';

@Entity('importance')
export class ImportanceEntity extends CommonBigPKEntity {
  @Column('varchar', { length: 20 })
  name: ImportanceType;
}
