import { useSuspenseQuery } from '@tanstack/react-query'

import { GetWordsRequest, GetWordsResponse } from '@interface/apis/eng-to-kor'
import { apiInterface } from '@/lib/clients/apiInterface'

const getEnglishWords = async (params: GetWordsRequest) => {
  const response = await apiInterface.get<GetWordsResponse>('/eng-to-kor/words', { params })
  return response.data
}

export const useGetEnglishWords = (params: GetWordsRequest) => {
  return useSuspenseQuery({ queryFn: () => getEnglishWords(params), queryKey: ['english-words', params] })
}
