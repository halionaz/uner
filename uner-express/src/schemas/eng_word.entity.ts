import { EngDefinition } from "@/schemas/eng_definition.entity";
import { EngExampleSentence } from "@/schemas/eng_example_sentence.entity";
import { Importance } from "../../../nest/src/entities/importance.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('eng_word')
export class EngWord {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('varchar', {length:50})
  english: string;

  @Column('text')
  mnemonic: string

  @Column('int')
  difficulty:number

  @ManyToMany(() => Importance, {cascade:['insert']})
  @JoinTable({
    name:'eng_importance',
    joinColumn:{
      name:'word_id',
      referencedColumnName:'id',
    },inverseJoinColumn:{
      name:'importance_id',
      referencedColumnName:'id'
    }
  })
  importance:Importance[]

  @OneToMany(() => EngExampleSentence, (exampleSentence) => exampleSentence.word, {cascade: ['insert']})
  exampleSentences: EngExampleSentence[]

  @OneToMany(() => EngDefinition, (definition) => definition.word, {cascade: ['insert']})
  definitions: EngDefinition[]

  @CreateDateColumn()
  createdAt: Timestamp

  constructor(english:string){
    this.english = english
  }
}