import { insertWord } from '@/data/admin';
import { CreateWordSchema } from '@/words';
import { ApiResponse } from '@/utils/types';
import { Request, Response } from 'express';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { isNativeError } from 'util/types';

export const getAllWords = async (req: Request, res: Response) => {};
export const postWords = async (req: Request, res: Response) => {
  try {
    // 데이터 검증
    const wordData = CreateWordSchema.parse(req.body);

    const response = await insertWord(wordData);

    res.status(201).json(response);
  } catch (error) {
    console.error('Error creating word: ', error);

    const response: ApiResponse<never> = {
      success: false,
      error: isNativeError(error) ? error.message : 'Unknown Error',
    };

    res.status(400).json(response);
  }
};
export const deleteWords = async (req: Request, res: Response) => {};
