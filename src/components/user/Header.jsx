import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { CiHeart } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { IoBagOutline } from "react-icons/io5"
import { Link } from "react-router"
import { useGetAllCategoriesQuery } from "../../store/nikeApi"

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const { data: categories } = useGetAllCategoriesQuery()
    

    return (
        <>
            <div>
                <div className="hidden lg:flex justify-between bg-[#F5F5F5] py-3 px-12 ">
                    <div className="flex gap-4">
                        <img className="h-4" src="/img/Jumpman_logo.png" alt="Jordan Logo" />
                        <img className="h-4" src="/img/Converse-Logo.png" alt="Converse Logo" />
                    </div>
                    <div className="flex gap-4 text-xs font-medium">
                        <Link to="/retail" className="hover:text-gray-500 cursor-pointer">Find a store</Link>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer">Help</p>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer" >Join Us</p>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer">Sign In</p>
                    </div>
                </div>
                <div className="flex justify-between items-center py-3 px-6 lg:px-12 z-7">
                    <Link to="/">
                        <img className="h-5" src="/img/Nike-logo.png" alt="Nike Logo" />
                    </Link>
                    <div className="hidden lg:flex gap-4 relative w-full">
                        <ul className="flex gap-4 flex-row-reverse w-full">
                            {categories?.map((item) => (
                                <li key={item.id} className="relative group">
                                    <Link to={item.slug} className="cursor-pointer hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                    {item.children && item.children.length > 0 && (
                                    <div className="fixed left-0 top-[100px] hidden group-hover:block bg-white  w-screen z-100">
                                        <div className="mx-auto max-w-7xl p-6 flex gap-8">
                                        {item.children.map((child) => (
                                            <div key={child.id} className="min-w-[200px]">
                                            <div className="font-medium hover:underline cursor-pointer mb-2">
                                                {child.name}
                                            </div>
                                            {child.children && child.children.length > 0 && (
                                                <div className="flex flex-col gap-1 pl-2 border-l border-gray-100">
                                                {child.children.map((subChild) => (
                                                    <div 
                                                        key={subChild.id}
                                                        className="text-sm hover:underline cursor-pointer text-gray-600 hover:text-black"
                                                    >
                                                    {subChild.name}
                                                    </div>
                                                ))}
                                                </div>
                                            )}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>



                    <div className="flex justify-between">
                        <div onClick={() => setOpenSearch(true)} className="xl:bg-[#F5F5F5] rounded-full flex overflow-hidden">
                            <button  className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer"><HiMagnifyingGlass /></button>
                            <input className="hidden xl:flex outline-none border-0 focus:border-0 focus:ring-0 appearance-none bg-[#F5F5F5] px-2" type="text" placeholder="Search" />                        
                        </div>                
                        <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer lg:hidden"><FiUser /></button>
                        <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer hidden lg:flex"><CiHeart /></button>
                        <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer" ><IoBagOutline /></button>
                        <button onClick={() => setOpenMenu(true)} className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer lg:hidden"><AiOutlineMenu /></button>
                    </div>
                </div>
            </div>
            
            {openMenu && (
                <div className="transition-transform duration-300">
                    <div
                        className="fixed inset-0 bg-[#1111115C] z-50"
                        onClick={() => setOpenMenu(false)}>
                    </div>
                    <div className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-lg p-4 transition-all duration-600 ease-in-out z-50">
                        <div className="flex justify-end">
                            <button onClick={() => setOpenMenu(false)}>
                                close
                            </button>
                        </div>

                        <ul className="mt-6 space-y-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}

            {openSearch && (
                <div>
                    <div className="fixed top-0 w-full h-2/3 bg-white shadow-lg p-4 transition-all duration-600 ease-in-out z-50">
                        <div className="flex justify-between">
                             <div>
                                <img className="h-5" src="/img/Nike-logo.png" alt="Nike Logo" />
                            </div>
                            <div className="bg-[#F5F5F5] rounded-full flex overflow-hidden">
                                <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer"><HiMagnifyingGlass /></button>
                                <input className="outline-none border-0 focus:border-0 focus:ring-0 appearance-none bg-[#F5F5F5] px-2" type="text" placeholder="Search" />                        
                            </div> 
                            <button onClick={() => setOpenSearch(false)}>
                                close
                            </button>

                        </div>

                        <ul className="mt-6 space-y-4">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div
                        className="fixed inset-0 bg-[#1111115C] z-40"
                        onClick={() => setOpenSearch(false)}>
                    </div>
                    
                </div>
            )}
        </>

    )
}

export default Header
