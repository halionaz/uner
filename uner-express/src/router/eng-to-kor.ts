import { Router } from 'express';
import { getWords, postAnswer } from '@/controller/eng-to-kor';

const router = Router();

router.get('/words', getWords);
router.post('/answer', postAnswer)

export { router as engToKor };
