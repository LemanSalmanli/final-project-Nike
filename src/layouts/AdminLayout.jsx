import { Outlet } from 'react-router'
import NikeSidebar from '../components/admin/NikeSidebar'

function AdminLayout() {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <NikeSidebar />
        </div>
        <div className='w-[80%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout
