import Home from '@/pages/Home'
import VocabularyPage from '@/pages/VocabularyPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/voca', element: <VocabularyPage /> },
]

export default routes
