import { Outlet } from 'react-router'
import NikeSidebar from '../components/admin/NikeSidebar'

function AdminLayout() {
  return (
    <div className='flex'>
        <div className='w-[30%]'>
            <NikeSidebar />
        </div>
        <div className='w-[70%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout
