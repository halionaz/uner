export type PartOfSpeech =
  | 'verb'
  | 'noun'
  | 'adverb'
  | 'adjective'
  | 'conjunction'
  | 'preposition'
  | 'pronoun'
  | 'interjection'
  | 'idioms';

export type Topic = ''; // TODO: Category 세분화
export type Importance = 'TOEFL' | 'KSAT' | 'IELTS' | 'SAT'; //TODO: Importance 세분화

export interface ExampleSentence {
  sentence: string;
  translation: string;
}

export interface Definition {
  definition: string;
  partOfSpeech: PartOfSpeech;
}

export interface Word {
  id: number;
  english: string;
  definitions: Definition[];
  mnemonic?: string;
  exampleSentence?: ExampleSentence[];
  difficulty: number;
  topic: Topic[];
  importance?: Importance[];
  synonyms?: string[];
  antonyms?: string[];
}
