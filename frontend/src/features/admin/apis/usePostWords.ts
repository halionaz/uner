import { apiInterface } from '@/lib/clients/apiInterface'
import { PostWordRequest } from '@interface/apis/admin'
import { useMutation } from '@tanstack/react-query'

const postWords = async (body: PostWordRequest) => {
  const response = await apiInterface.post('/admin/words', body)
  return response.data
}

export const usePostWords = () => {
  return useMutation({
    mutationFn: postWords,
  })
}
