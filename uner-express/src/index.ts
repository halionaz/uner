import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.API_KEY;

app.use(express.json());

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.get('/problems', (req, res) => {
  res.json();
});

app.get('/prompt', (req, res) => {
  const { givenWord, userPrompt } = req.query;
  // const givenWord = 'grandiloquent';
  // const userPrompt = '허풍스러운';
  // const notCorrectPrompt = '호화로운';

  const prompt = `Given Word : ${givenWord}, User's Answer : ${userPrompt}`;

  const response = openai.chat.completions.create({
    model: 'gpt-4o-mini',
    store: true,
    messages: [
      {
        role: 'system',
        content: [
          {
            type: 'text',
            text: '당신은 한국인 학생을 가르치는 영어 교사입니다. 주어진 영어 단어와 비교해서 유저가 제시하는 한국어 단어의 뜻을 판단하고, 적절한 한글 뜻이 제시되었는지 판별해주세요. 첫 줄은 O / X로 적합성 여부를 판별해주세요. 두번째 줄부터 이에 대한 부연 설명을 한국어로 작성해주세요.',
          },
        ],
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: {
      type: 'text',
    },
    temperature: 0.8,
    max_completion_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  response.then(result => res.json(result.choices[0].message.content));
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
