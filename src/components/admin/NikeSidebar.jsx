import { Link, useNavigate } from 'react-router';
import { CiLogout } from 'react-icons/ci';

const NikeSidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("role")
    localStorage.removeItem("token")
    navigate('/login')
  }
  
  return (
    <div className="flex h-screen bg-gray-100 fixed">
      <div className="w-64 bg-black text-white flex flex-col shadow-2xl">
          <div>
              <img className="" src="/img/nike-logo-white.webp" alt="Nike Logo" />
          </div>
        <nav className="flex-1 py-6">
          <ul className="space-y-4 px-4">
            <Link to="category"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg  bg-orange-600 hover:bg-orange-500 text-white shadow-lg">
                <span className="font-medium">Category</span>
            </Link>
            <Link to="brand"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg  bg-orange-600 hover:bg-orange-500 text-white shadow-lg">
                <span className="font-medium">Brand</span>
            </Link>
            <Link to="product"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg  bg-orange-600 hover:bg-orange-500 text-white shadow-lg">
                <span className="font-medium">Product</span>
            </Link>
          </ul>
        </nav>
        <div className="text-white p-4 text-lg hover:text-[#707072]">
          <button className='cursor-pointer flex items-center gap-2'
            onClick={() => handleLogout()}
          >
            <CiLogout />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default NikeSidebar;