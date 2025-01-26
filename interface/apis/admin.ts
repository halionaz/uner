import { ImportanceType } from '@interface/types/word';

export interface PostWordRequest {
  english: string;
  mnemonic: string;
  difficulty: number;
}

export interface PostWithNameRequest {
  name: string;
}

export type GetImportanceResponse = {
  id: string;
  name: ImportanceType;
}[];
