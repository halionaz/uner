export interface GetWordsRequest {
  wordCount?: number;
  level?: number;
  topic?: string;
  wrongAnswered?: boolean;
  liked?: boolean;
}

export interface GetAnswerRequest {
  givenWord?: string;
  userPrompt?: string;
}
