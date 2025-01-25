import { apiInterface } from '@/lib/clients/apiInterface'
import { PostAnswerRequest, PostAnswerResponse } from '@interface/apis/eng-to-kor'
import { useMutation } from '@tanstack/react-query'

const postCheckKoreanAnswer = async (body: PostAnswerRequest) => {
  const response = await apiInterface.post<PostAnswerResponse>('/eng-to-kor/answer', body)
  return response.data
}

export const usePostCheckKoreanAnswer = () => {
  return useMutation({
    mutationFn: postCheckKoreanAnswer,
  })
}
