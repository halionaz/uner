import { Suspense } from 'react'

import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import Loading from '@/common/components/Loading'
import Provider from '@/lib/clients/Provider'

function App() {
  const router = useRoutes(routes)

  return (
    <Suspense fallback={<Loading />}>
      <Provider>{router}</Provider>
    </Suspense>
  )
}

export default App
