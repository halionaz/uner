import { apiInterface } from '@/lib/clients/apiInterface'
import { GetImportanceResponse } from '@interface/apis/admin'
import { useSuspenseQuery } from '@tanstack/react-query'

const getImportance = async () => {
  const response = await apiInterface.get<GetImportanceResponse>('/admin/importance')
  return response.data
}

export const useGetImportance = () => {
  return useSuspenseQuery({
    queryKey: ['all-importance'],
    queryFn: getImportance,
  })
}
