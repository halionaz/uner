import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const OPENAI_API_KEY = process.env.API_KEY;

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});
