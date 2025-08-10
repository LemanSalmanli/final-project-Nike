import React, { useState } from 'react';
import { 
  Home, 
  Shirt, 
  Package, 
  LogOut, 
  ChevronDown, 
  ChevronRight,
  Zap,
  Wind,
  Target,
  Star
} from 'lucide-react';
import { Link } from 'react-router';

const NikeSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  
  return (
    <div className="flex h-screen bg-gray-100 fixed">
      <div className="w-64 bg-blue-100 text-white flex flex-col shadow-2xl">
          <div className='p-8'>
              <img className="h-5 w-15 " src="/img/Nike-logo.png" alt="Nike Logo" />
          </div>
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            <Link to="category"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 bg-orange-600 text-white shadow-lg">
                <span className="font-medium">Category</span>
            </Link>
            <Link to="brand"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 bg-orange-600 text-white shadow-lg">
                <span className="font-medium">Brand</span>
            </Link>
            <Link to="product"
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 bg-orange-600 text-white shadow-lg">
                <span className="font-medium">Product</span>
            </Link>
          </ul>
        </nav>

        <div className="border-t border-gray-800 text-black p-4">
          <button className='cursor-pointer flex items-center'
            onClick={() => localStorage.clear()}
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default NikeSidebar;