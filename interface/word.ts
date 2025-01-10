export const partOfSpeechArray = [
  'verb',
  'noun',
  'adverb',
  'adjective',
  'conjunction',
  'preposition',
  'pronoun',
  'interjection',
  'idioms',
] as const;
export const topicArray = [''] as const;
export const importanceArray = ['TOEFL', 'KSAT', 'IELTS', 'SAT'] as const;

export type PartOfSpeech = (typeof partOfSpeechArray)[number];

export type Topic = (typeof topicArray)[number]; // TODO: 구체적 카테고리 확장
export type Importance = (typeof importanceArray)[number]; //TODO: Importance 세분화

export interface ExampleSentence {
  id: number;
  sentence: string;
  translation: string;
}

export interface Definition {
  id: number;
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
