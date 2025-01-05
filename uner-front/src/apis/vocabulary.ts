import { apiInterface } from '@/util/axios/apiInterface'
import { Word } from '@/util/types/word'
import { useSuspenseQuery } from '@tanstack/react-query'

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

const getEnglishWords = async (params: GetEnglishWordsRequest) => {
  const response = await apiInterface.get<GetEnglishWordsResponse>('/eng-to-kor/words', { params })
  return response.data
}

export const useGetEnglishWords = (params: GetEnglishWordsRequest) => {
  return useSuspenseQuery({ queryFn: () => getEnglishWords(params), queryKey: ['english-words', params] })
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
