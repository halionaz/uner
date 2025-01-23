import { EngWord } from "@/schemas/eng_word.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('eng_example_sentence')
export class EngExampleSentence {
  @PrimaryGeneratedColumn('increment')
  id: number

  @ManyToOne(() => EngWord, (word) => word.exampleSentences, {eager:true})
  @JoinColumn({name:'word_id', referencedColumnName:'id'})
  word: EngWord

}