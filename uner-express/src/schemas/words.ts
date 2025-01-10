import { z } from 'zod';

import { importanceArray, partOfSpeechArray } from '@interface/word';

export const DefinitionSchema = z.object({
  definition: z.string(),
  partOfSpeech: z.enum(partOfSpeechArray),
});

export const ExampleSentenceSchema = z.object({
  sentence: z.string(),
  translation: z.string(),
});

export const CreateWordSchema = z.object({
  english: z.string(),
  definitions: z.array(DefinitionSchema),
  mnemonic: z.string().optional(),
  exampleSentences: z.array(ExampleSentenceSchema).optional(),
  difficulty: z.number().min(1).max(10),
  topics: z.array(z.string()),
  importance: z.array(z.enum(importanceArray)).optional(),
  synonyms: z.array(z.string()).optional(),
  antonyms: z.array(z.string()).optional(),
});
