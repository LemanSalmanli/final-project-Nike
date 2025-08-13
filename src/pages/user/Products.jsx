import { useGetAllCategoriesQuery, useGetFilteredProductsQuery, useGetProductByCategoryIdQuery } from "../../store/nikeApi"
import Card from "../../components/ui/Card"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router";
import FilterBar from "../../components/user/FilterBar";

const colorClasses = {
    Red: "bg-red-500 text-red-500 ",
    Blue: "bg-blue-500 text-blue-500 ",
    Green: "bg-green-500 text-green-500 ",
    Yellow: "bg-yellow-400 text-yellow-400 ",
    Orange: "bg-orange-500 text-orange-500 ",
    Purple: "bg-purple-500 text-purple-500 ",
    Pink: "bg-pink-400 text-pink-400 ",
    Brown: "bg-amber-800 text-amber-800 ",
    Black: "bg-black text-black",
    White: "bg-white border border-gray-300 text-white",
    Gray: "bg-gray-400 text-gray-400",
    Beige: "bg-yellow-100 text-yellow-100",
    Ivory: "bg-neutral-50 text-neutral-50",
    Teal: "bg-teal-500 text-teal-500",
    Turquoise: "bg-cyan-400 text-cyan-400",
    Lime: "bg-lime-400 text-lime-400",
    Olive: "bg-lime-700 text-lime-700",
    Maroon: "bg-red-800 text-red-800",
    Navy: "bg-blue-900 text-blue-900",
    Indigo: "bg-indigo-500 text-indigo-500",
    Gold: "bg-yellow-500 text-yellow-500",
    Silver: "bg-gray-300 text-gray-300",
    Bronze: "bg-orange-700 text-orange-700",
    Coral: "bg-rose-400 text-rose-400",
    Salmon: "bg-rose-300 text-rose-300",
    Mint: "bg-green-300 text-green-300",
    Lavender: "bg-purple-300 text-purple-300",
    Charcoal: "bg-gray-800 text-gray-800",
    Peach: "bg-orange-300 text-orange-300",
    Mustard: "bg-yellow-600 text-yellow-600",
    Sand: "bg-yellow-200 text-yellow-200",
    Sky: "bg-sky-400 text-sky-400",
    Plum: "bg-purple-800 text-purple-800",
    Emerald: "bg-emerald-500 text-emerald-500",
    Ruby: "bg-red-600 text-red-600",
    Sapphire: "bg-blue-600 text-blue-600"
}

function Products() {
    const [openFilter, setOpenFilter] = useState(false)
    const [filterButton, setFilterButton] = useState(false)
    const [hideFilterBar, setHideFilterBar] = useState(false)

    const [searchParams] = useSearchParams()
    const subChildCategoryId = searchParams.get("subChildCategory")
    const childCategoryId = searchParams.get("childCategory")
    const categoryId = searchParams.get("category")
    
    const [filters, setFilters] = useState({
        brandId: null,
        colors: [],
        sizes: [],
        minPrice: null,
        maxPrice: null,
    })

    const [filteredProducts, setFilteredProducts] = useState([])
    
    const { data: allCategories } = useGetAllCategoriesQuery()
    const { data: products, isLoading: loading, isError: error } = useGetProductByCategoryIdQuery(+subChildCategoryId)
    const { data: productsByFilter } = useGetFilteredProductsQuery(filters, {
        skip: !filters.brandId && 
            filters.colors.length === 0 && 
            filters.sizes.length === 0 && 
            filters.minPrice === null && 
            filters.maxPrice === null
    })

    const parentCategory = allCategories?.find(item => item.id === +categoryId)
    const childCategory = parentCategory?.children?.find(item => item.id === +childCategoryId)
    const subChildCategory = childCategory?.children?.find(item => item.id === +subChildCategoryId)

    
        
    const allColors = products?.reduce((acc, product) => {
        product.colors?.forEach(color => {
            if (!acc.includes(color)) {
             acc.push(color)
            }
        })
        return acc
    }, []) || []    

    const allSizes = products?.reduce((acc, product) => {
        product.sizes?.forEach(size => {
            if (!acc.includes(size)) {
                acc.push(size)
            }
        })
        return acc
    }, []) || []    

   const allBrands = products?.reduce((acc, product) => {
        if (product?.brand && !acc.some(b => b.id === product.brand.id)) {
            acc.push(product.brand);
        }
        return acc;
    }, []) || []


    
    useEffect(() => {
        if (!products) return

        let filtered = []
        
        const hasFilters =
            filters.brandId ||
            filters.colors.length > 0 ||
            filters.sizes.length > 0 ||
            filters.minPrice !== null ||
            filters.maxPrice !== null

            if (hasFilters) {
                filtered = productsByFilter ? productsByFilter.filter(p => +p.categoryId === +subChildCategoryId)  : []
            } else {
                filtered = products
            }
            setFilteredProducts(filtered)

    }, [filters, products, productsByFilter, subChildCategoryId])

   
    function listByPrice(highToLow) {
        setFilteredProducts(prev => {
            const sorted = [...prev].sort((a, b) => {
                return highToLow ?  b.price - a.price :  a.price - b.price
            })
            return sorted
        })
    }

    return (
        <div className=" relative">
            <div className="bg-[#F5F5F5] px-4 py-6 text-center text-xs underline font-semibold border-b border-gray-300">
                <h5>Up to 50% Off Select Styles: Use code SPORT</h5>    
            </div>
            <div className="lg:flex items-end justify-between lg:px-8 lg:mb-8" >
                <div className="border-b border-gray-300  lg:border-0  ">
                    <div className="py-3 text-sm font-semibold  px-4 lg:pb-0">
                        <h3>{childCategory?.name} / {subChildCategory?.name}</h3>
                    </div>
                    <div className="py-2 lg:py-0 text-lg font-medium flex gap-2 px-4 lg:text-2xl">
                        <h3>{parentCategory?.name}'s {subChildCategory?.name}</h3>
                        <span className="hidden lg:block">({filteredProducts?.length})</span>
                    </div>
                    <div className="overflow-x-scroll flex  gap-4 font-medium py-4  px-4 mt-4 scroll-hide lg:hidden">
                        {childCategory?.children?.map(item =>
                            <h5 className="whitespace-nowrap" key={item?.id}>{item?.name}</h5>
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 py-4 lg:hidden">
                    <h3 className="text-[#707072] text-lg ">{filteredProducts?.length} Results</h3>
                    <button onClick={() => setOpenFilter(true)}
                        className="flex gap-2 items-center text-lg border-gray-300 hover:border-black cursor-pointer border py-0.5 px-5 rounded-3xl">
                        Filter <HiOutlineAdjustmentsHorizontal />
                    </button>
                </div>
                <div className="hidden lg:flex items-center gap-2 mr-4">
                    <button onClick={() =>  {
                        setHideFilterBar(!hideFilterBar)
                    }}
                        className="flex gap-2 items-center text-lg cursor-pointer black-text">
                        <span>{hideFilterBar ? 'Show' : 'Hide'}</span>
                        Filters 
                        <HiOutlineAdjustmentsHorizontal className="text-2xl" />
                    </button>
                </div>
            </div>
            <div className={` lg:px-12 flex ${!hideFilterBar ? 'gap-12 ' : 'gap-0 block'} `}>
                <div
                    className={`sticky top-0 z-50 w-[15%] bg-white hidden lg:block
                            h-[100vh] overflow-y-scroll transition-all duration-300
                            ${!hideFilterBar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}`}
                >
                    <FilterBar
                        listByPrice={listByPrice}
                        allBrands={allBrands}
                        allColors={allColors}
                        allSizes={allSizes}
                        colorClasses={colorClasses}
                        filters={filters}
                        setFilters={setFilters}
                    />
                </div>

                <div className={`grid grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-4 lg:${!hideFilterBar ? 'w-[80%]' : 'lg:w-full'}`}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => 
                            <Card item={item} key={item.id} />                    
                        ) 
                    )   : (
                            <div>No found</div>
                        )
                    }
                </div>
            </div>

            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openFilter ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute bottom-0 left-0 w-full h-full bg-white overflow-y-scroll text-black px-6 py-4 shadow-lg transform transition-all duration-300 ${openFilter ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg text-[#111111]">Filter</h3>
                        <button  onClick={() => setOpenFilter(false)}
                            className="w-12 h-12 text-xl flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full">
                            X
                        </button>
                    </div>
                    <FilterBar 
                        listByPrice={listByPrice}
                        allBrands={allBrands} 
                        allColors={allColors} 
                        allSizes={allSizes} 
                        colorClasses={colorClasses}
                        filters={filters}
                        setFilters={setFilters}
                        setOpenFilter={setOpenFilter}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products