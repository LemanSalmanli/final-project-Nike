import { colorClasses } from "../../data/colors";

function FilterBar({listByPrice, allBrands, allColors, allSizes, filters, setFilters, setOpenFilter}) {
   
    function toggleFilter(field, value) {
        setFilters(prev => {
                const isSelected = prev[field].includes(value)
                return {
                    ...prev,
                    [field]: isSelected ? prev[field].filter(item => item !== value) : [...prev[field], value]        
                }
                
        })
    }

    return (
        <div>
            <div className="py-4 text-[#111111]">
                <h3 className="font-semibold ">Sort By</h3>
                <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                    <li className="w-full ">
                        <div className="flex items-center ps-1 gap-3">
                            <input onChange={() => listByPrice(1)} id="list-radio-high" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 cursor-pointer" />
                            <label htmlFor="list-radio-high" className="cursor-pointer" >Price: High-Low </label>
                        </div>
                    </li>
                    <li className="w-full ">
                        <div className="flex items-center ps-1 gap-3">
                            <input onChange={() => listByPrice(0)} id="list-radio-low" type="radio" value="" name="list-radio" className="w-4 h-4 text-black bg-white border-gray-700 focus:ring-0 cursor-pointer" />
                            <label htmlFor="list-radio-low"  className="cursor-pointer">Price: Low-High</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="py-4 text-[#111111] border-b border-gray-300">
                <h3 className="font-semibold">Color</h3>
                <div className="grid grid-cols-3 gap-4 py-4">
                    {allColors.map((color) =>                             
                        <div  className="cursor-pointer flex flex-col gap-1 items-center" key={color}>
                            <input 
                                onChange={() => toggleFilter("colors", color)}
                                checked={filters.colors.includes(color)}
                                id={`${color}-checkbox`} 
                                type="checkbox" 
                                value={color} 
                                className={` ${colorClasses[color]} w-7 h-7 text-xl rounded-full focus:ring-white`} 
                            />
                            <label className="text-xs text-[#111111] font-normal" htmlFor={`${color}-checkbox`} >{color}</label>
                        </div>
                    )}
                </div>
            </div>
            <div className="py-4 text-[#111111]">
                <h3 className="font-semibold">Shop by Price</h3>
                <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                    <li className="w-full">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: null,
                                        maxPrice: null
                                    }))
                                }} 
                                id="mxPrice0-radio"  
                                name="price-list" 
                                type="radio" 
                                value="" 
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" 
                            />
                            <label htmlFor="mxPrice0-radio" className="cursor-pointer">Any Price</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: 1,
                                        maxPrice: 25
                                    }))
                                }} 
                                id="mxPrice25-radio"  
                                name="price-list" 
                                type="radio" 
                                checked={filters.minPrice === 1 && filters.maxPrice === 25}
                                value="" 
                                className={` ${(filters.minPrice === 1 && filters.maxPrice === 25) ? 'bg-black' : 'bg-white'} w-5 h-5 text-xl  border-black rounded-sm focus:ring-0`} 
                            />
                            <label htmlFor="mxPrice25-radio" className="cursor-pointer">$0 - $25</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: 25,
                                        maxPrice: 50
                                    }))
                                }} 
                                id="mxPrice50-radio" 
                                name="price-list" 
                                type="radio" 
                                value="" 
                                checked={filters.minPrice === 25 && filters.maxPrice === 50}
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" 
                            />
                            <label htmlFor="mxPrice50-radio" className="cursor-pointer">$25 - $50</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: 50,
                                        maxPrice: 100
                                    }))
                                }}  
                                id="mxPrice100-radio" 
                                name="price-list" 
                                type="radio" 
                                checked={filters.minPrice === 50 && filters.maxPrice === 100}
                                value="" 
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" 
                            />
                            <label htmlFor="mxPrice100-radio" className="cursor-pointer">$50 - $100</label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: 100,
                                        maxPrice: 150
                                    }))
                                }}  
                                id="mxPrice150-radio" 
                                name="price-list" 
                                type="radio" 
                                checked={filters.minPrice === 100 && filters.maxPrice === 150}
                                value="" 
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0"
                            />
                            <label htmlFor="mxPrice150-radio" className="cursor-pointer">$100 - $150</label>
                        </div>
                    </li>
                    <li className="w-full mt-2">
                        <div className="flex items-center ps-1 gap-3">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        minPrice: 150,
                                        maxPrice: 5000
                                    }))
                                }} 
                                id="minPrice150-radio" 
                                name="price-list" 
                                type="radio" 
                                checked={filters.minPrice === 150 && filters.maxPrice === 5000}
                                value="" 
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0" 
                            />
                            <label htmlFor="minPrice150-radio" className="cursor-pointer">Over $150</label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="py-4 text-[#111111] border-b border-gray-300">
                <h3 className="font-semibold">Size</h3>
                <div className="flex flex-wrap gap-2 py-4">
                    {allSizes.map((size) => (
                        <label key={size} htmlFor={`${size}-checkbox`} className="cursor-pointer flex flex-col gap-1 items-center">
                            <input
                                id={`${size}-checkbox`}
                                type="checkbox"
                                checked={filters.sizes.includes(size)}
                                onChange={() => toggleFilter("sizes", size)}
                                className="hidden peer"
                            />
                            <div className="border border-gray-300 rounded-lg py-1.5 px-6 peer-checked:border-black">
                                {size && typeof(size) == 'string' ?  size : size.slice(2) }
                            </div>
                        </label>
                    ))}
                </div>
            </div>
            <div className="py-4 text-[#111111]">
                <h3 className="font-semibold">Brand</h3>
                <ul className="text-lg py-8 space-y-4 border-b border-gray-300">
                    <li className="w-full cursor-pointer" key="brand">
                        <div className="flex items-center ps-1 gap-3 ">
                            <input 
                                onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        brandId: null
                                    }))
                                }}                                 
                                id="anybrand-radio" 
                                type="radio" 
                                checked={filters.brandId === null}
                                name="brand-selection"
                                value="anybrand" 
                                className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0 cursor-pointer" 
                            />
                            <label htmlFor="anybrand-radio" className="cursor-pointer">Any Brand</label>
                        </div>
                    </li>

                    {allBrands?.map((brand) => 
                        <li className="w-full cursor-pointer" key={brand.id}>
                            <div className="flex items-center ps-1 gap-3 ">
                                <input 
                                    onChange={() => {
                                    setFilters(prev => ({
                                        ...prev,
                                        brandId: brand.id
                                    }))
                                }} 
                                    id={`${brand.name}-radio`} 
                                    type="radio" 
                                    checked={filters.brandId === brand.id}
                                    name="brand-selection"
                                    value={brand.name} 
                                    className="w-5 h-5 text-xl text-black bg-white border-black rounded-sm focus:ring-0 cursor-pointer" 
                                />
                                <label htmlFor={`${brand.name}-radio`} className="cursor-pointer">{brand.name}</label>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className="flex justify-between lg:hidden">
                <button onClick={() => {
                        setFilters({
                            brandId: null,
                            colors: [],
                            sizes: [],
                            minPrice: null,
                            maxPrice: null,
                        })
                        setOpenFilter(false)
                    }} 
                    className="w-[50%] text-center text-lg bg-white text-black  cursor-pointer  border border-gray-300 py-0.5 px-5 rounded-3xl">
                    Clear 
                </button>
                <button onClick={() => setOpenFilter(false)}
                    className="w-[50%] text-center text-lg bg-black text-white  cursor-pointer  py-0.5 px-5 rounded-3xl">
                    Apply 
                </button>
            </div>
        </div>
    )
}

export default FilterBar
