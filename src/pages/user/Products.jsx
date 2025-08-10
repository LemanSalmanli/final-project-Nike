import { useGetAllProductsQuery, useGetFilteredProductsQuery, useGetProductByCategoryIdQuery } from "../../store/nikeApi"
import Card from "../../components/ui/Card"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { useState } from "react"
import { Radio } from "@mui/material";
import { useSearchParams } from "react-router";

function Products() {

    const [openFilter, setOpenFilter] = useState(false)
    const [searchParams] = useSearchParams()
    const categoryId = searchParams.get("subChildcategory") || searchParams.get("childCategory") 

    const { 
        data: products, 
        isLoading, 
        isError
    } = useGetProductByCategoryIdQuery(categoryId)        
    // const { 
    //     data: products, 
    //     isLoading, 
    //     isError
    // } = useGetAllProductsQuery()        
        

    return (
        <div className="px-2 relative">
            <div className="flex justify-between items-center px-4 py-2 lg:hidden">
                <h3 className="text-[#707072] text-lg ">{products?.length} Results</h3>
                <button onClick={() => setOpenFilter(true)}
                    className="flex gap-2 items-center text-lg border-gray-300 hover:border-black cursor-pointer border py-0.5 px-5 rounded-3xl"
                >
                    Filter <HiOutlineAdjustmentsHorizontal />
                </button>
            </div>

            <div className="flex gap-4 px-4">
                <div className="w-[20%] hidden lg:block">
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold ">Sort By</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full ">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="list-radio-high" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 " />
                                    <label for="list-radio-high" >Price: High-Low </label>
                                </div>
                            </li>
                            <li className="w-full ">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="list-radio-low" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 " />
                                    <label for="list-radio-low">Price: Low-High</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold">Gender (2)</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3 ">
                                    <input id="men-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="men-checkbox" >Men</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="women-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="women-checkbox" >Women</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="unisex-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="unisex-checkbox" >Unisex</label>
                                </div>
                            </li>
                           
                            
                        </ul>
                    </div>
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold">Shop by Price</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3 ">
                                    <input id="mxPrice25-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice25-checkbox" >$0 - $25</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice50-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice50-checkbox" >$25 - $50</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice100-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice100-checkbox" >$50 - $100</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice150-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice150-checkbox" >$100 - $150</label>
                                </div>
                            </li>
                            <li className="w-full mt-2">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="minPrice150-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="minPrice150-checkbox" >Over $150</label>
                                </div>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:w-[80%]">
                    {products?.map((item, idx) => 
                        <Card item={item} key={idx} />
                    )}
                </div>
            </div>

            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openFilter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute bottom-0 left-0 w-full h-full bg-white overflow-y-scrollName text-black px-6 py-4 shadow-lg transform transition-all duration-300 ${openFilter ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg text-[#111111]">Filter</h3>
                        <button 
                            onClick={() => setOpenFilter(false)}
                            className="w-12 h-12 text-xl flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                            X
                        </button>
                    </div>

                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold ">Sort By</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full ">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="list-radio-high" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 " />
                                    <label for="list-radio-high" >Price: High-Low </label>
                                </div>
                            </li>
                            <li className="w-full ">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="list-radio-low" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 " />
                                    <label for="list-radio-low">Price: Low-High</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold">Gender (2)</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3 ">
                                    <input id="men-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="men-checkbox" >Men</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="women-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="women-checkbox" >Women</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="unisex-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="unisex-checkbox" >Unisex</label>
                                </div>
                            </li>
                           
                            
                        </ul>
                    </div>
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold">Shop by Price</h3>
                        <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3 ">
                                    <input id="mxPrice25-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice25-checkbox" >$0 - $25</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice50-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice50-checkbox" >$25 - $50</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice100-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice100-checkbox" >$50 - $100</label>
                                </div>
                            </li>
                            <li className="w-full">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="mxPrice150-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="mxPrice150-checkbox" >$100 - $150</label>
                                </div>
                            </li>
                            <li className="w-full mt-2">
                                <div className="flex items-center ps-1 gap-3">
                                    <input id="minPrice150-checkbox" type="checkbox" value="" className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" />
                                    <label for="minPrice150-checkbox" >Over $150</label>
                                </div>
                            </li>
                           
                            
                        </ul>
                    </div>
                    <div className="py-4 text-[#111111]">
                        <h3 className="font-semibold">Size</h3>
                        <div className="text-lg py-8 space-y-4 border-b border-gray-300">
                            <button className="">
                                
                            </button>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products