type PartOfSpeech =
  | 'verb'
  | 'noun'
  | 'adverb'
  | 'adjective'
  | 'conjunction'
  | 'preposition'
  | 'pronoun'
  | 'interjection'
  | 'idioms'

type Topic = '' // TODO: Category 세분화
type Importance = 'TOEFL' | 'KSAT' | 'IELTS' | 'SAT' //TODO: Importance 세분화

interface ExampleSentence {
  sentence: string
  translation: string
}

export interface Definition {
  definition: string
  partOfSpeech: PartOfSpeech
}

export interface Word {
  id: number
  english: string
  definitions: Definition[]
  mnemonic?: string
  exampleSentence?: ExampleSentence[]
  difficulty: number
  topic: Topic[]
  importance?: Importance[]
  synonyms?: string[]
  antonyms?: string[]
  // pronounce?
}
