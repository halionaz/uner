export interface PostAnswerRequest {
    givenWord: string
    userPrompt: string
}

export interface GetWordsRequest {
    wordCount?: number;
    level?: number;
    topic?: string;
    wrongAnswered?: boolean;
    liked?: boolean;
  }
  