import { Suspense } from 'react'

import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Loading from '@/common/components/Loading'
import GlobalStyleProvider from '@/lib/clients/GlobalStyleProvider'

function App() {
  const router = useRoutes(routes)

  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyleProvider>{router}</GlobalStyleProvider>
    </Suspense>
  )
}

export default App
