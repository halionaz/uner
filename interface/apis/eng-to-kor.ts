import { WordInterface } from '@interface/types/word';

export interface PostAnswerRequest {
  givenWord: string;
  userPrompt: string;
}
export interface PostAnswerResponse {
  is_answer: boolean;
  description: string;
}

export interface GetWordsRequest {
  wordCount?: number;
  level?: number;
  topic?: string;
  wrongAnswered?: boolean;
  liked?: boolean;
}

export interface GetWordsResponse {
  words: WordInterface[];
}
