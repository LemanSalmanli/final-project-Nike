import { useGetAllCategoriesQuery, useGetFilteredProductsQuery, useGetProductByCategoryIdQuery } from "../../store/nikeApi"
import Card from "../../components/ui/Card"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router";
import FilterBar from "../../components/user/FilterBar";
import { Loader2 } from "lucide-react";
import { FiLoader } from "react-icons/fi";


function Products() {
    const [openFilter, setOpenFilter] = useState(false)
    const [hideFilterBar, setHideFilterBar] = useState(false)
    const [searchParams] = useSearchParams()

    const subChildCategoryId = searchParams.get("subChildCategory")
    const childCategoryId = searchParams.get("childCategory")
    const categoryId = searchParams.get("category")
    const brand = searchParams.get("brandId")
    
    const [filters, setFilters] = useState({
        brandId: null,
        colors: [],
        sizes: [],
        minPrice: null,
        maxPrice: null,
    })

    const { data: products, isLoading: loading, isError: error } = useGetProductByCategoryIdQuery(+subChildCategoryId)

    const {data: brandProducts, isLoading: brandLoading, isError: brandError} = useGetFilteredProductsQuery(
        { brandId: brand }, 
        { skip: !brand }
    )
    const baseProducts = brand ? brandProducts : products

    const { data: productsByFilter, isLoading: filterLoading, isError: isFilterError } = useGetFilteredProductsQuery(filters, {
        skip: !filters.brandId && 
        filters.colors.length === 0 && 
        filters.sizes.length === 0 && 
        filters.minPrice === null && 
        filters.maxPrice === null
    })
    
    const [filteredProducts, setFilteredProducts] = useState([])
    
    
    const { data: allCategories } = useGetAllCategoriesQuery()
    const parentCategory = allCategories?.find(item => item.id === +categoryId)
    const childCategory = parentCategory?.children?.find(item => item.id === +childCategoryId)
    const subChildCategory = childCategory?.children?.find(item => item.id === +subChildCategoryId)


        
    const allColors = baseProducts?.reduce((acc, product) => {
        product.colors?.forEach(color => {
            if (!acc.includes(color)) {
             acc.push(color)
            }
        })
        return acc
    }, []) || []    

    const allSizes = baseProducts?.reduce((acc, product) => {
        product.sizes?.forEach(size => {
            if (!acc.includes(size)) {
                acc.push(size)
            }
        })
        return acc
    }, []) || []    

   const allBrands = baseProducts?.reduce((acc, product) => {
        if (product?.brand && !acc.some(b => b.id === product.brand.id)) {
            acc.push(product.brand);
        }
        return acc;
    }, []) || []


    useEffect(() => {
        if (openFilter) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [openFilter])

    useEffect(() => {
        if (!baseProducts) return
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
                filtered = baseProducts
            }
            setFilteredProducts(filtered)

    }, [filters, baseProducts, productsByFilter, subChildCategoryId])

   
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
            <div className="lg:px-12 flex w-full gap-4">
                {!hideFilterBar && (
                    <div className="sticky top-0 z-50 bg-white hidden lg:block w-[20%] h-[100vh] overflow-y-scroll">
                        <FilterBar 
                            listByPrice={listByPrice}
                            allBrands={allBrands}
                            allColors={allColors}
                            allSizes={allSizes}
                            filters={filters}
                            setFilters={setFilters}
                        />
                    </div>
                )}
                <div className={`grid grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-4 w-full ${!hideFilterBar ? 'lg:w-[80%]' : 'w-full'} px-4`}>
                    {(isFilterError || brandError || filteredProducts.length === 0 ) ?  
                        <div className="text-center text-lg w-full"><p>No products found.</p></div> 
                        : (
                            loading || brandLoading || filterLoading ) ? 
                                <div className="py-8 flex items-center justify-center w-full"><FiLoader className="animate-spin w-15 h-15" /></div>
                        : (
                            filteredProducts.map((item) => 
                                <Card item={item} key={item.id} />  
                        ) 
                    )}
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