import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GetAnswerRequest, GetWordsRequest } from './types/eng-to-kor';
import { Word } from './types/word';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.get('/eng-to-kor/words', (req, res) => {
  const query = req.query as GetWordsRequest;
  const words: Word[] = [
    {
      id: 1,
      english: 'ephemeral',
      definitions: [
        { definition: '수명이 짧은', partOfSpeech: 'adjective' },
        { definition: '단명하는', partOfSpeech: 'adjective' },
        { definition: '덧없는', partOfSpeech: 'adjective' },
      ],
      difficulty: 5,
      topic: [],
    },
    {
      id: 2,
      english: 'obfuscate',
      definitions: [{ definition: '혼란스럽게 만들다', partOfSpeech: 'verb' }],
      difficulty: 5,
      topic: [],
    },
    {
      id: 3,
      english: 'ubiquitous',
      definitions: [
        { definition: '어디에나 있는', partOfSpeech: 'adjective' },
        { definition: '아주 흔한', partOfSpeech: 'adjective' },
      ],
      difficulty: 5,
      topic: [],
    },
    {
      id: 4,
      english: 'character',
      definitions: [
        { definition: '성격', partOfSpeech: 'noun' },
        { definition: '특성', partOfSpeech: 'noun' },
        { definition: '등장인물', partOfSpeech: 'noun' },
        { definition: '배역', partOfSpeech: 'noun' },
      ],
      difficulty: 2,
      topic: [],
    },
  ];
  res.status(200).json({
    words,
  });
});

app.get('/eng-to-kor/answer', (req, res) => {
  const { givenWord, userPrompt } = req.query as GetAnswerRequest;

  if (!givenWord) {
    res.status(400).json({ message: '단어가 주어지지 않았습니다' });
    return;
  }
  if (!userPrompt) {
    res.status(400).json({ message: '유저 답변이 주어지지 않았습니다' });
    return;
  }

  const prompt = `영어 단어 : ${givenWord}, 답변 : ${userPrompt}`;

  const response = openai.chat.completions.create({
    model: 'gpt-4o-mini',
    store: true,
    messages: [
      {
        role: 'system',
        content: [
          {
            type: 'text',
            text: `당신은 한국인 학생을 가르치는 영어 교사에요. 주어진 영어 단어와 비교해서 유저가 제시하는 한국어 단어의 뜻을 판단하고, 적절한 한글 뜻이 제시되었는지 판별해주세요. 
            답변의 json_object 스키마는 다음과 같아요.
            is_answer로는 true / false boolean의 타입으로 유저가 단어의 뜻을 올바르게 해석했는지 적합성 여부를 판별해주세요. 여러 의미를 가진 단어라면 그 중 하나의 뜻만 제시되어도 정답 처리해주세요. 의미가 맞더라도 품사가 다르다면 오답 처리해주세요.
            description으로는 여러 의미를 가진 단어일 때 유저가 제시한 답이 아닌 다른 뜻들을 문장으로 제시해주세요.`,
          },
        ],
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: {
      type: 'json_object',
    },
    temperature: 0.5,
    max_completion_tokens: 256,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  response.then(result => {
    const answer = result.choices[0].message.content;
    if (answer === null) {
      res.status(400).json({ message: 'GPT가 응답하지 않습니다' });
      return;
    }
    res.json(JSON.parse(answer || ''));
  });
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
