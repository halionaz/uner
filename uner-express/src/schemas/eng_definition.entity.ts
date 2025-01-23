import { EngWord } from "@/schemas/eng_word.entity";
import { PartOfSpeech } from "@/schemas/part_of_speech.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('eng_definition')
export class EngDefinition {
  @PrimaryGeneratedColumn('increment')
  id:number

  @Column('text')
  definition: string

  @ManyToOne(()=>EngWord, (word) => word.definitions, {eager:true})
  @JoinColumn({name:'word_id', referencedColumnName:'id'})
  word: EngWord

  @ManyToOne(()=> PartOfSpeech, {eager:true})
  @JoinColumn({name:'part_of_speech_id', referencedColumnName:'id'})
  partOfSpeech: PartOfSpeech
}