import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { engToKor } from '@/router/eng-to-kor';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/eng-to-kor', engToKor);

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
