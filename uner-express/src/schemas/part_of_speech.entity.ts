import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {  PartOfSpeechType } from "@interface/word";

@Entity('part_of_speech')
export class PartOfSpeech {
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column('varchar',{length:20})
  name: PartOfSpeechType
}