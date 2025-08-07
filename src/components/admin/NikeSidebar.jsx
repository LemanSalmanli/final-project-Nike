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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col shadow-2xl">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-black p-2 rounded-lg">
              <Wind className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold tracking-wide">NIKE</span>
          </div>
        </div>

        {/* Navigation */}
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

        {/* User Profile & Logout */}
        <div className="border-t border-gray-800 p-4">
          <div className="flex items-center space-x-3 mb-4 px-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-white font-medium">Admin User</div>
              <div className="text-gray-400 text-sm">admin@nike.com</div>
            </div>
          </div>
          
          <button 
            onClick={() => handleItemClick('logout')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeItem === 'logout'
                ? 'bg-red-600 text-white'
                : 'text-gray-300 hover:bg-red-600 hover:text-white'
            }`}
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