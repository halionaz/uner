import { apiInterface } from '@/util/axios/apiInterface'
import { WordInterface } from '@interface/word'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'

interface GetEnglishWordsRequest {
  wordCount?: number
  level?: number
  topic?: string
  wrongAnswered?: boolean
  liked?: boolean
}

interface GetEnglishWordsResponse {
  words: WordInterface[]
}

const getEnglishWords = async (params: GetEnglishWordsRequest) => {
  const response = await apiInterface.get<GetEnglishWordsResponse>('/eng-to-kor/words', { params })
  return response.data
}

export const useGetEnglishWords = (params: GetEnglishWordsRequest) => {
  return useSuspenseQuery({ queryFn: () => getEnglishWords(params), queryKey: ['english-words', params] })
}

interface PostCheckKoreanAnswerRequest {
  givenWord: string
  userPrompt: string
}
interface PostCheckKoreanAnswerResponse {
  is_answer: boolean
  description: string
}

const postCheckKoreanAnswer = async (body: PostCheckKoreanAnswerRequest) => {
  const response = await apiInterface.post<PostCheckKoreanAnswerResponse>('/eng-to-kor/answer', body)
  return response.data
}

export const usePostCheckKoreanAnswer = () => {
  return useMutation({
    mutationFn: postCheckKoreanAnswer,
  })
}
