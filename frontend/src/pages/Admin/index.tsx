import Loading from '@/common/components/Loading'
import Sidebar from '@/features/admin/components/Sidebar'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import * as s from './style.css'

const Admin = () => {
  return (
    <div className={s.Wrapper}>
      <Sidebar />
      <div className={s.ContentsWrapper}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default Admin
