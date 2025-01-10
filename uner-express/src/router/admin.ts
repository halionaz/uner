import { deleteWords, getAllWords, postWords } from '@/controller/admin';
import { Router } from 'express';

const router = Router();

router.get('words', getAllWords);
router.post('words', postWords);
router.delete('words', deleteWords);
