import Admin from '@/pages/Admin'
import ImportancePage from '@/pages/Admin/ImportancePage'
import WordsPage from '@/pages/Admin/WordsPage'
import Home from '@/pages/Home'
import VocabularyPage from '@/pages/VocabularyPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/voca', element: <VocabularyPage /> },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'words',
        element: <WordsPage />,
      },
      { path: 'importance', element: <ImportancePage /> },
    ],
  },
]

export default routes
