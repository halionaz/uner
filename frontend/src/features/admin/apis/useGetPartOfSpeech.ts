import { apiInterface } from '@/lib/clients/apiInterface'
import { GetPartOfSpeechResponse } from '@interface/apis/admin'
import { useSuspenseQuery } from '@tanstack/react-query'

const getPartOfSpeech = async () => {
  const response = await apiInterface.get<GetPartOfSpeechResponse>('/admin/part-of-speech')
  return response.data
}

export const useGetPartOfSpeech = () => {
  return useSuspenseQuery({
    queryKey: ['all-part-of-speech'],
    queryFn: getPartOfSpeech,
  })
}
