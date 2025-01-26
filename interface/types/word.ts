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
export type PartOfSpeechType = (typeof partOfSpeechArray)[number];
export const isPartOfSpeechType = (arg:any):arg is PartOfSpeechType => {
  return partOfSpeechArray.indexOf(arg) !== -1
}

export const topicArray = ['newly'] as const;
export type TopicType = (typeof topicArray)[number]; // TODO: 구체적 카테고리 확장
export const isTopicType = (arg:any):arg is TopicType => {
  return topicArray.indexOf(arg) !== -1
}

export const importanceArray = ['TOEFL', 'KSAT', 'IELTS', 'SAT'] as const;
export type ImportanceType = (typeof importanceArray)[number]; //TODO: Importance 세분화
export const isImportanceType = (arg:any):arg is ImportanceType => {
  return importanceArray.indexOf(arg) !== -1
}

export const relationArray = ['synonym', 'antonym'] as const
export type RelationType = (typeof relationArray)[number]
export const isRelationType = (arg:any):arg is RelationType => {
  return relationArray.indexOf(arg) !== -1
}

export interface ExampleSentenceInterface {
  id: string;
  sentence: string;
  translation: string;
}

export interface DefinitionInterface {
  id: string;
  definition: string;
  partOfSpeech: PartOfSpeechType;
}

export interface WordInterface {
  id: string;
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
