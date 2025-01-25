import Loading from '@/common/components/Loading'
import Contents from '@/features/admin/components/Contents'
import Sidebar from '@/features/admin/components/Sidebar'
import { useQueryParams } from '@/lib/hooks/useQueryParams'
import { AdminPageParamsInterface, AdminPageType } from '@/pages/AdminPage/types'
import { Suspense } from 'react'

const AdminPage = () => {
  const [params, setParams] = useQueryParams<AdminPageParamsInterface>()
  const curPage = params.page

  const handlePage = (page: AdminPageType) => {
    setParams({ page })
  }

  return (
    <div className="flex h-full w-full flex-row items-center gap-4">
      <Sidebar curPage={curPage} handlePage={handlePage} />
      <Suspense fallback={<Loading />}>
        <Contents curPage={curPage} />
      </Suspense>
    </div>
  )
}

export default AdminPage
