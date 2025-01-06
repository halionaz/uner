import { Suspense } from 'react'

import LoadingScreen from '@/components/etc/LoadingScreen'
import VocabularyPage from '@/pages/VocabularyPage'

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="bg-white text-black">
        <VocabularyPage />
      </div>
    </Suspense>
  )
}

export default App
