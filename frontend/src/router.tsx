import AdminPage from '@/pages/AdminPage'
import Home from '@/pages/Home'
import VocabularyPage from '@/pages/VocabularyPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/voca', element: <VocabularyPage /> },
  { path: '/admin', element: <AdminPage /> },
]

export default routes
