import { CommonBigPKEntity } from '@src/entities/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserEntity extends CommonBigPKEntity {
  @Column('varchar', { nullable: false, unique: true })
  nickname: string;
}
