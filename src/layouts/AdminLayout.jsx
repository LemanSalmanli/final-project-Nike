import { Outlet } from 'react-router'
import NikeSidebar from '../components/admin/NikeSidebar'

function AdminLayout() {
  return (
    <div className='flex'>
        <div className='w-64 hidden lg:block'>
            <NikeSidebar />
        </div>
        <div className='px-4 w-full lg:ml-24'>
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout
