import { CreateWordSchema } from '@/words';
import { ApiResponse } from '@/utils/types';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { z } from 'zod';

export const insertWord = async (
  wordData: z.infer<typeof CreateWordSchema>
) => {
  // // 트랜잭션 시작
  // const connection = await getConnect();
  // await connection.beginTransaction();

  // try {
  //   // 1. 단어 기본 정보 저장
  //   const [wordResult] = await connection.execute<ResultSetHeader>(
  //     'INSERT INTO word (english, mnemonic, difficulty) VALUES (?, ?, ?)',
  //     [wordData.english, wordData.mnemonic || null, wordData.difficulty]
  //   );
  //   const wordId = wordResult.insertId;

  //   // 2. 정의 저장
  //   for (const def of wordData.definitions) {
  //     const [partOfSpeechResult] = await connection.execute<RowDataPacket[]>(
  //       'SELECT id FROM part_of_speech WHERE name = ?',
  //       [def.partOfSpeech]
  //     );

  //     const partOfSpeechId = partOfSpeechResult[0]?.id;
  //     if (!partOfSpeechId) {
  //       throw new Error(`Invalid part of speech: ${def.partOfSpeech}`);
  //     }

  //     await connection.execute(
  //       'INSERT INTO definition (word_id, definition, part_of_speech_id) VALUES (?, ?, ?)',
  //       [wordId, def.definition, partOfSpeechId]
  //     );
  //   }

  //   // 3. 예문 저장
  //   if (wordData.exampleSentences) {
  //     for (const example of wordData.exampleSentences) {
  //       await connection.execute(
  //         'INSERT INTO example_sentence (word_id, sentence, translation) VALUES (?, ?, ?)',
  //         [wordId, example.sentence, example.translation]
  //       );
  //     }
  //   }

  //   // 4. 토픽 연결
  //   for (const topic of wordData.topics) {
  //     // 토픽이 없으면 생성
  //     const [topicResult] = await connection.execute<RowDataPacket[]>(
  //       'INSERT IGNORE INTO topic (name) VALUES (?)',
  //       [topic]
  //     );
  //     const [topicData] = await connection.execute<RowDataPacket[]>(
  //       'SELECT id FROM topic WHERE name = ?',
  //       [topic]
  //     );
  //     const topicId = topicData[0].id;

  //     await connection.execute(
  //       'INSERT INTO word_topic (word_id, topic_id) VALUES (?, ?)',
  //       [wordId, topicId]
  //     );
  //   }

  //   // 5. 중요도 연결
  //   if (wordData.importance) {
  //     for (const imp of wordData.importance) {
  //       const [impResult] = await connection.execute<RowDataPacket[]>(
  //         'SELECT id FROM importance WHERE name = ?',
  //         [imp]
  //       );
  //       const importanceId = impResult[0]?.id;
  //       if (!importanceId) {
  //         throw new Error(`Invalid importance: ${imp}`);
  //       }

  //       await connection.execute(
  //         'INSERT INTO word_importance (word_id, importance_id) VALUES (?, ?)',
  //         [wordId, importanceId]
  //       );
  //     }
  //   }

  //   // 6. 동의어/반의어 처리
  //   async function addWordRelations(
  //     words: string[],
  //     relationType: 'synonym' | 'antonym'
  //   ) {
  //     for (const relatedWord of words) {
  //       // 관련 단어가 존재하는지 확인하고 없으면 생성
  //       await connection.execute(
  //         'INSERT IGNORE INTO word (english, difficulty) VALUES (?, 5)',
  //         [relatedWord]
  //       );

  //       const [relatedWordResult] = await connection.execute<RowDataPacket[]>(
  //         'SELECT id FROM word WHERE english = ?',
  //         [relatedWord]
  //       );
  //       const relatedWordId = relatedWordResult[0].id;

  //       // 양방향 관계 설정
  //       await connection.execute(
  //         'INSERT INTO word_relation (word_id, related_word_id, relation_type) VALUES (?, ?, ?)',
  //         [wordId, relatedWordId, relationType]
  //       );
  //     }
  //   }

  //   if (wordData.synonyms) {
  //     await addWordRelations(wordData.synonyms, 'synonym');
  //   }
  //   if (wordData.antonyms) {
  //     await addWordRelations(wordData.antonyms, 'antonym');
  //   }

  //   // 트랜잭션 커밋
  //   await connection.commit();

  //   const response: ApiResponse<{ id: number }> = {
  //     success: true,
  //     data: { id: wordId },
  //   };

  //   return response;
  // } catch (error) {
  //   // 오류 시 롤백
  //   await connection.rollback();
  //   throw error;
  // }
};
