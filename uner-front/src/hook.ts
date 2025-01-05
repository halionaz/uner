import { apiInterface } from '@/util/axios/apiInterface'
import { Word } from '@/util/types/word'

interface GetEnglishWordsRequest {
  wordCount?: number
  level?: number
  topic?: string
  wrongAnswered?: boolean
  liked?: boolean
}

interface GetEnglishWordsResponse {
  words: Word[]
}

export const getEnglishWords = async (params: GetEnglishWordsRequest) => {
  const response = await apiInterface.get<GetEnglishWordsResponse>('/eng-to-kor/words', { params })
  return response.data
}

interface GetKoreanGradingRequest {
  givenWord: string
  userPrompt: string
}
interface GetKoreanGradingResponse {
  is_answer: boolean
  description: string
}

export const getKoreanGrading = async (params: GetKoreanGradingRequest) => {
  const response = await apiInterface.get<GetKoreanGradingResponse>('/eng-to-kor/answer', { params })
  return response.data
}
