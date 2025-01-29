import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class User extends CommonBigPKEntity {
  @Column('varchar', { nullable: false, unique: true })
  nickname: string;
}
