import { apiInterface } from '@/lib/clients/apiInterface'
import { GetWordsResponse } from '@interface/apis/admin'
import { useSuspenseQuery } from '@tanstack/react-query'

const getWords = async () => {
  const response = await apiInterface.get<GetWordsResponse>('/admin/words')
  return response.data
}

export const useGetWords = () => {
  return useSuspenseQuery({
    queryKey: ['all-words'],
    queryFn: getWords,
  })
}
