import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { CiHeart } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { IoBagOutline } from "react-icons/io5"
import { Link } from "react-router"
import { useGetAllCategoriesQuery } from "../../store/nikeApi"
import { Accordion } from "flowbite"
import { AccordionDetails, AccordionSummary } from "@mui/material"

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const { data: categories } = useGetAllCategoriesQuery()
    const [expanded, setExpanded] = useState("")

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    

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
                        <img className="h-5 w-15" src="/img/Nike-logo.png" alt="Nike Logo" />
                    </Link>
                    <div className="hidden lg:flex gap-4 justify-center items-center w-full">
                        <ul className="flex gap-4 flex-row-reverse items-center justify-center w-full">
                            {categories?.map((item) => (
                                <li key={item.id} className=" group">
                                    <Link 
                                        to={`/${item.slug}`}  className="cursor-pointer font-semibold  flex items-center hover:underline">
                                        {item.name}                                    
                                    </Link>
                                    {item.children && item.children.length > 0 && (
                                        <div className="absolute py-5 left-0 right-0 mt-0 hidden group-hover:block  z-50 w-full">
                                            <div className="bg-white w-full">
                                                <div className="p-4 flex w-[70%] mx-auto">
                                                    {item.children.map((child) => (
                                                        <div key={child.id} className="w-full">
                                                            <Link 
                                                                to={`/products?category=${item.id}&childCategory=${child.id}`}
                                                                className="font-medium hover:underline cursor-pointer mb-2 block"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                            {child.children && child.children.length > 0 && (
                                                                <div className="flex flex-col gap-1 pl-2 border-l border-gray-100">
                                                                    {child.children.map((subChild) => (
                                                                        <Link 
                                                                            to={`/products?category=${item.id}&childCategory=${child.id}&subChildcategory=${subChild.id}`}
                                                                            key={subChild.id}
                                                                            className="text-sm hover:underline cursor-pointer text-gray-600 hover:text-black block py-1"
                                                                        >
                                                                            {subChild.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-end">
                        <div onClick={() => setOpenSearch(true)} className="xl:bg-[#F5F5F5] rounded-full flex overflow-hidden xl:w-[50%]">
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
            
            
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className="fixed inset-0 bg-[#1111115C] z-50"
                    onClick={() => setOpenMenu(false)}>
                </div>
                <div className={`absolute z-60 bottom-0 right-0 w-[330px] h-full bg-white overflow-y-scrollName text-black px-6 py-4 shadow-lg transform transition-all duration-300 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end items-center">
                        <button 
                            onClick={() => setOpenMenu(false)}
                            className="w-12 h-12 text-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full"
                        >
                            X
                        </button>
                    </div>
                                
                        <ul>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Jordan</li>
                            <li>Sport</li>
                            <li>Sale</li>
                        </ul>
                </div>
            </div>

            {openSearch && (
                <div>
                    <div className="fixed top-0 w-full h-2/5 bg-white shadow-lg p-4 transition-all duration-600 ease-in-out z-50">
                        <div className="flex justify-between px-4">
                             <div>
                                <img className="h-8" src="/img/Nike-logo.png" alt="Nike Logo" />
                            </div>
                            <div className="bg-[#F5F5F5] rounded-full flex overflow-hidden w-[50%]">
                                <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer"><HiMagnifyingGlass /></button>
                                <input className="outline-none border-0 focus:border-0 focus:ring-0 appearance-none bg-[#F5F5F5] px-2 w-full" type="text" placeholder="Search" />                        
                            </div> 
                            <button onClick={() => setOpenSearch(false)} className="font-semibold text-gray-800 text-lg cursor-pointer">
                                Cancel
                            </button>

                        </div>

                        
                    </div>
                    <button
                        className="fixed inset-0 bg-[#1111115C] z-40"
                        onClick={() => setOpenSearch(false)}>
                    </button>
                    
                </div>
            )}
        </>

    )
}

export default Header
