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
export const relationArray = ['synonym', 'antonym'] as const

export type PartOfSpeechType = (typeof partOfSpeechArray)[number];
export type RelationType = (typeof relationArray)[number]

export type TopicType = (typeof topicArray)[number]; // TODO: 구체적 카테고리 확장
export type ImportanceType = (typeof importanceArray)[number]; //TODO: Importance 세분화

export interface ExampleSentenceInterface {
  id: number;
  sentence: string;
  translation: string;
}

export interface DefinitionInterface {
  id: number;
  definition: string;
  partOfSpeech: PartOfSpeechType;
}

export interface WordInterface {
  id: number;
  english: string;
  definitions: DefinitionInterface[];
  mnemonic?: string;
  exampleSentence?: ExampleSentenceInterface[];
  difficulty: number;
  topic: TopicType[];
  importance?: ImportanceType[];
  synonyms?: string[];
  antonyms?: string[];
}
