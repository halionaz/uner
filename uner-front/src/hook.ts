import { apiInterface } from './axios/apiInterface'

interface GetCheckWordAccuracyRequest {
  givenWord: string
  userPrompt: string
}
interface GetCheckWordAccuracyResponse {
  is_answer: boolean
  description: string
}

export const getCheckWordAccuracy = async (params: GetCheckWordAccuracyRequest) => {
  const response = await apiInterface.get<GetCheckWordAccuracyResponse>('/prompt', { params })
  return response.data
}
