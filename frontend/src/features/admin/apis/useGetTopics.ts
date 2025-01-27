import { apiInterface } from '@/lib/clients/apiInterface'
import { GetTopicsResponse } from '@interface/apis/admin'
import { useSuspenseQuery } from '@tanstack/react-query'

const getTopics = async () => {
  const response = await apiInterface.get<GetTopicsResponse>('/admin/topic')
  return response.data
}

export const useGetTopics = () => {
  return useSuspenseQuery({
    queryKey: ['all-topics'],
    queryFn: getTopics,
  })
}
