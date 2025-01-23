import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp,  } from "typeorm";
import { ImportanceType } from "@interface/word";

@Entity('importance')
export class Importance {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {length:20})
  name: ImportanceType;

  @CreateDateColumn()
  createdAt: Timestamp;
}