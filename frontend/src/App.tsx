import { Suspense } from 'react'

import LoadingScreen from '@/components/etc/LoadingScreen'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import GlobalStyleProvider from '@/util/clients/GlobalStyleProvider'

function App() {
  const router = useRoutes(routes)

  return (
    <Suspense fallback={<LoadingScreen />}>
      <GlobalStyleProvider>{router}</GlobalStyleProvider>
    </Suspense>
  )
}

export default App
