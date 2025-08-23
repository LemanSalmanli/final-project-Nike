import { useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { CiHeart } from "react-icons/ci"
import { FiUser } from "react-icons/fi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { IoBagOutline } from "react-icons/io5"
import { Link } from "react-router"
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../../store/nikeApi"
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const { data: categories } = useGetAllCategoriesQuery()   
    const [displayedCategories, setDisplayedCategories] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [searchedData, setSearchedData] = useState([])
    const { data: allProducts, isLoading, isError } = useGetAllProductsQuery()

    
    useEffect(() => {
        if (categories) {
            setDisplayedCategories(categories)
        }
    }, [categories])

    useEffect(() => {
        if (!searchInput) {
            setSearchedData([])
            return
        }

        const results = allProducts?.filter((item) =>
            item?.name?.toLowerCase().includes(searchInput.toLowerCase())
        ) || []

        setSearchedData(results)
    }, [searchInput, allProducts])
    

    return (
        <>
            <div>
                <div className="hidden lg:flex justify-between bg-[#F5F5F5] py-3 px-12 ">
                    <div className="flex gap-4">
                        <img className="h-4" src="/img/Jumpman_logo.png" alt="Jordan Logo" />
                        <img className="h-4" src="/img/Converse-Logo.png" alt="Converse Logo" />
                    </div>
                    <div className="flex gap-2 text-xs font-semibold">
                        <Link to="/retail" className="hover:text-gray-500 cursor-pointer">Find a store</Link>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer">Help</p>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer" >Join Us</p>
                        <span>|</span>
                        <p className="hover:text-gray-500 cursor-pointer">Sign In</p>
                    </div>
                </div>
                <div className=" grid grid-cols-2 lg:grid-cols-3 items-center py-3 px-6 lg:px-12 z-7">
                    <Link to="/" className="justify-self-start">
                        <img className="h-5 w-15" src="/img/Nike-logo.png" alt="Nike Logo" />
                    </Link>
                    <div className="hidden lg:flex justify-center items-center w-full">
                        <ul className="flex  flex-row-reverse items-center justify-center w-full">
                            {categories?.map((item) => (
                                <li key={item.id} className="group">
                                    <Link 
                                        to={`/${item.slug}`} 
                                        className="cursor-pointer font-semibold flex items-center hover:underline mr-6"
                                    >
                                        {item.name}                                    
                                    </Link>
                                    {item.children && item.children.length > 0 && (
                                        <div className="absolute py-5 left-0 right-0 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform -translate-y-10 group-hover:translate-y-0 transition-all duration-300 z-50 w-full">
                                            <div className="bg-white w-full shadow-lg text-sm ">
                                                <div className="p-4 grid grid-cols-4 justify-center w-[50%] font-semibold mx-auto ">
                                                    {item.children.map((child) => (
                                                        <div key={child.id} className="w-full py-8 mb-10">
                                                            <Link 
                                                                to={`/products?category=${item.id}&childCategory=${child.id}`}
                                                                className="hover:underline cursor-pointer mb-2 block"
                                                            >
                                                                {child.name}
                                                            </Link>
                                                            {child.children && child.children.length > 0 && (
                                                                <div className="flex flex-col">
                                                                    {child.children.map((subChild) => (
                                                                        <Link 
                                                                            to={`/products?category=${item.id}&childCategory=${child.id}&subChildCategory=${subChild.id}`}
                                                                            key={subChild.id}
                                                                            className="cursor-pointer text-[#707072] hover:text-black block py-1"
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
                    <div className="flex justify-self-end justify-end w-fit">
                        <div onClick={() => setOpenSearch(true)} className="xl:bg-[#F5F5F5] rounded-full flex overflow-hidden xl:w-[50%]">
                            <button  className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer"><HiMagnifyingGlass /></button>
                            <input value='' className="hidden xl:flex outline-none border-0 focus:border-0 focus:ring-0 appearance-none bg-[#F5F5F5] px-2" type="text" placeholder="Search" />                        
                        </div>                
                        <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer lg:hidden"><FiUser /></button>
                        <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer hidden lg:flex"><CiHeart /></button>
                        <Link to={"/basket"} className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer" ><IoBagOutline /></Link>
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
                    <div className="flex flex-row-reverse justify-between items-center">
                        <button 
                            onClick={() => setOpenMenu(false)}
                            className="w-12 h-12 text-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full"
                        >
                            <RxCross1 />
                        </button>
                        {displayedCategories !== categories && (
                            <button
                                onClick={() => setDisplayedCategories(categories)}
                                className="text-xl flex items-center gap-3 hover:text-[#707072] cursor-pointer"
                            >
                                <FaAngleLeft /> All 
                            </button>
                        )}
                    </div> 
                    <div className="px-4 py-8 ml-4">
                        <ul className={`flex gap-4 text-2xl ${displayedCategories === categories ? 'flex-col-reverse' : 'flex-col'}`}>
                            {displayedCategories?.map((item) => (
                                item?.children?.length > 0 ? (
                                    <li
                                        key={item?.id}
                                        className="cursor-pointer hover:text-[#707072] flex justify-between items-center whitespace-nowrap"
                                        onClick={() => setDisplayedCategories(item?.children)}
                                    >
                                        {item?.name}
                                        <span className="text-lg">
                                            <FaChevronRight />
                                        </span>
                                    </li>
                                ) : (
                                    <Link
                                        to={`/products?subChildCategory=${item?.id}`}
                                        key={item?.id}
                                        className="cursor-pointer hover:text-[#707072] flex justify-between items-center whitespace-nowrap"
                                    >
                                        {item?.name}
                                    </Link>
                                )
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {openSearch && (
                <div>
                    <div className="fixed top-0  w-full min-h-1/5 h-fit bg-white shadow-lg p-4 transition-all duration-600 ease-in-out z-50">
                        <div className="flex justify-between px-4">
                             <div>
                                <img className="h-8" src="/img/Nike-logo.png" alt="Nike Logo" />
                            </div>
                            <div className="bg-[#F5F5F5] rounded-full flex overflow-hidden w-[50%]">
                                <button className="hover:bg-gray-200 rounded-full p-2 text-2xl cursor-pointer"><HiMagnifyingGlass /></button>
                                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="outline-none border-0 focus:border-0 focus:ring-0 appearance-none bg-[#F5F5F5] px-2 w-full" type="text" placeholder="Search" />                        
                            </div> 
                            <button onClick={() => setOpenSearch(false)} className="font-semibold text-gray-800 text-lg cursor-pointer">
                                Cancel
                            </button>
                        </div>
                        <div className="flex gap-10 w-[90%] m-auto overflow-x-scroll scroll-hide flex-nowrap p-16 justify-start">
                            {searchedData.length > 0 ? (
                                searchedData.map(product => (
                                    <Link
                                        key={product?.id}
                                        to={`/details/${product?.id}`}
                                        className="flex-shrink-0"
                                        onClick={() => {
                                            setOpenSearch(false)
                                            setSearchInput('')
                                        }}
                                    >
                                        <img className="h-60 w-46" src={product?.images[0]?.url} alt="Image" />
                                        <div className="pt-6">
                                            <h3 className="text-[#111111]">{product?.name.slice(0,18)}</h3>
                                            <p className="text-gray-600">{product?.category?.name} {}</p>
                                            <p className="text-[#111111] pt-4">$ {product?.price}</p>
                                        </div>
                                    </Link>
                                ))
                            ) : searchInput ? (
                                <p className="px-4 text-gray-500">No results found</p>
                            ) : null}
                        </div>
                    </div>
                    <button
                        className="fixed inset-0 bg-[#1111115C] z-40"
                        onClick={() => {
                            setOpenSearch(false)
                            setSearchInput('')
                        }}>
                    </button>
                </div>
            )}
        </>

    )
}

export default Header
