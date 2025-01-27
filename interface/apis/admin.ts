import { ImportanceType, PartOfSpeechType, TopicType } from '@interface/types/word';

export interface PostWordRequest {
  english: string;
  mnemonic?: string;
  difficulty: number;
  definition: {
    definition: string;
    partOfSpeech: string;
  }[];
  exampleSentence: {
    sentence: string;
    translation: string;
  }[];
  topic: { id: string }[];
  importance: { id: string }[];
}

export interface PostWithNameRequest {
  name: string;
}

export type GetImportanceResponse = {
  id: string;
  name: ImportanceType;
}[];

export type GetPartOfSpeechResponse = {
  id: string;
  name: PartOfSpeechType;
}[];

export type GetTopicsResponse = {
  id: string;
  name: TopicType;
}[];
