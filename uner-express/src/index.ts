import OpenAI from 'openai';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

app.get('/problems', (req, res) => {
  res.json();
});

app.get('/prompt', (req, res) => {
  const { givenWord, userPrompt } = req.query;

  if (!givenWord) {
    res.status(400).json({ message: '단어가 주어지지 않았습니다' });
    return;
  }
  if (!userPrompt) {
    res.status(400).json({ message: '유저 답변이 주어지지 않았습니다' });
    return;
  }

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
            text: `당신은 한국인 학생을 가르치는 영어 교사입니다. 주어진 영어 단어와 비교해서 유저가 제시하는 한국어 단어의 뜻을 판단하고, 적절한 한글 뜻이 제시되었는지 판별해주세요. 
            답변의 json_object 스키마는 다음과 같습니다.
            is_answer로는 true / false boolean의 타입으로 적합성 여부를 판별해주세요.
            description으로는 이에 대한 부연 설명을 한국어로 작성해주세요.`,
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
    temperature: 0.8,
    max_completion_tokens: 256,
    top_p: 1,
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
