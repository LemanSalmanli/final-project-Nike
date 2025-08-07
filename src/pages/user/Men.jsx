import { useRef } from "react"


function Men() {
        const scrollRef1 = useRef(null)
        const scrollRef2 = useRef(null)

        const slideScroll = (ref, offset) => {
            if (ref.current) {
                ref.current.scrollBy({
                    left: offset,
                    behavior: 'smooth',
                })
            }
        }

    return (
        <div>
            <div className="bg-[#F5F5F5] py-4 text-center text-xs underline font-semibold">
                <h5>Up to 50% Off Select Styles: Use code SPORT</h5>    
            </div>
            <div className="lg:flex items-center w-full py-6 px-4 lg:px-12 font-semibold sticky top-0 z-10 bg-white ">
                <div className="w-[5%] text-2xl mb-4 lg:mb-0">Men</div>
                <div className="w-[95%] space-x-8 lg:text-center text-base overflow-x-auto scroll-hide whitespace-nowrap">
                    <span className="hover:text-gray-500 cursor-pointer">Shoes</span>
                    <span className="hover:text-gray-500 cursor-pointer">Clothing</span>
                    <span className="hover:text-gray-500 cursor-pointer">Accessories</span>
                </div>
            </div>
            <div className="relative w-full sm:h-[40vh] lg:h-[100vh] overflow-hidden">
                <video className="w-full   object-cover"  controls autoPlay muted loop>
                    <source src="/videos/segment0.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-4 lg:bottom-12 left-1/2 -translate-x-1/2 text-center text-white space-y-4 ">
                    <h3 className="text-2xl sm:text-4xl lg:text-6xl  font-bold">STRENGTH STARTS HERE</h3>
                    <p>Power your potemtial  with the Metcon 10.</p>
                    <button className="bg-white cursor-pointer my-2 hover:bg-gray-300 text-black px-4 py-2 rounded-3xl font-medium transition">
                        Shop
                    </button>
                </div>
            </div>
            <div className="px-8 sm:px-16 mt-16">
                <div className="sm:flex items-center justify-between hidden">
                    <h3 className="text-2xl font-semibold">Shop by Sport</h3>
                    <div className="space-x-4">
                        <button   
                            onClick={() => slideScroll(scrollRef1, -300)}
                            aria-label="Slide back" type="button" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => slideScroll(scrollRef1, 300)}
                            aria-label="Slide forward" id="next" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef1}
                    className="flex items-center justify-start w-full gap-6 py-4 mx-auto overflow-x-scroll lg:gap-8">
                    <div className="sm:relative flex flex-shrink-0 flex-col gap-4">
                        <img className="object-center h-[50vh] sm:h-[90vh] lg:max-h-[60vh]" src="/img/men-1.avif" alt="Image 1" />
                        <button className="sm:absolute w-fit  bottom-4 left-8 font-semibold bg-black text-white sm:bg-white cursor-pointer sm:text-black px-4 py-2 rounded-3xl whitespace-nowrap">
                            Shop Basketball
                        </button>                       
                    </div>                    
                    <div className="sm:relative flex flex-shrink-0 flex-col gap-4">
                        <img className=" object-center  h-[50vh] sm:h-[90vh] lg:max-h-[60vh]" src="/img/men-2.avif" alt="Image 2" />
                        <button className="sm:absolute w-fit bottom-4 left-8 font-semibold bg-black text-white sm:bg-white cursor-pointer sm:text-black px-4 py-2 rounded-3xl whitespace-nowrap">
                            Shop Running
                        </button>                       
                    </div>
                    <div className="sm:relative flex flex-shrink-0 flex-col gap-4">
                        <img className=" object-center h-[50vh] sm:h-[90vh] lg:max-h-[60vh]" src="/img/men-3.avif" alt="Image 3" />
                        <button className="sm:absolute w-fit  bottom-4 left-8 font-semibold bg-black text-white sm:bg-white cursor-pointer sm:text-black px-4 py-2 rounded-3xl whitespace-nowrap">
                            Shop Soccer
                        </button>                       
                    </div>
                    <div className="sm:relative flex flex-shrink-0 flex-col gap-4">
                        <img className=" object-center h-[50vh] sm:h-[90vh] lg:max-h-[60vh]" src="/img/men-4.avif" alt="Image 4" />
                        <button className="sm:absolute w-fit bottom-4 left-8 font-semibold bg-black text-white sm:bg-white cursor-pointer sm:text-black px-4 py-2 rounded-3xl whitespace-nowrap">
                            Shop Golf
                        </button>                       
                    </div>
                    <div className="sm:relative flex flex-shrink-0 flex-col gap-4">
                        <img className=" object-center  h-[50vh] sm:h-[90vh] lg:max-h-[60vh]" src="/img/men-5.avif" alt="Image 5" />
                        <button className="sm:absolute w-fit bottom-4 left-8 font-semibold bg-black text-white sm:bg-white cursor-pointer sm:text-black px-4 py-2 rounded-3xl whitespace-nowrap">
                            Shop Training
                        </button>                       
                    </div> 
                </div>    
            </div>
            <div className="mt-8">
                <h3 className="text-2xl p-4 px-8 sm:px-16 font-semibold">Trending</h3>
                <div className="sm:flex">
                    <div className="relative flex ">
                        <img className="object-center w-full md:hidden" src="/img/men-card1.jpg" alt="Card 1" />
                        <img className="object-center w-full hidden md:block" src="/img/men-card1-full.jpg" alt="Card 1 Full" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h5 className="text-base">Nike Structure 26</h5>
                            <h3 className="text-2xl">Run Supported</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                    <div className="relative flex ">
                        <img className="object-center w-full md:hidden" src="/img/men-card2.jpg" alt="Card 2" />
                        <img className="object-center w-full hidden md:block" src="/img/men-card2-full.jpg" alt="Card 2 Full" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h5 className="text-base">Free Metcon 26</h5>
                            <h3 className="text-2xl">Move in Metcon</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                </div>
                <div className="relative flex ">
                    <img className="object-center w-full md:hidden" src="/img/men-card3.jpg" alt="Card 3" />
                    <img className="object-center w-full hidden md:block" src="/img/men-card3-full.jpg" alt="Card 3 Full" />
                    <div className="text-white  font-semibold absolute bottom-4  lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                        <h3 className="text-2xl">Bring Your Game</h3>
                        <h5 className="text-base">Sport your signature style with back-to-school uniform essentials.</h5>
                        <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                            Shop
                        </button>      
                    </div>                     
                </div>
            </div>
            <div className="px-12 sm:px-16 mt-16 w-full">
                <h3 className="text-2xl font-semibold">Shop by Category</h3>    
                <div className="flex items-center justify-start lg:justify-center w-full gap-6 py-4 mx-auto overflow-x-scroll lg:gap-8">
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center h-[40vh] sm:h-[50vh] lg:h-[60vh] aspect-square w-full" src="/img/men-accessories.jpg" alt="Category 1" />
                        <p className="text-xl font-semibold text-black ">
                            Accessories
                        </p>                       
                    </div>                    
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-cover h-[40vh] sm:h-[50vh] lg:h-[60vh]  aspect-square w-full" src="/img/men-shoes.jpg" alt="Category 2" />
                        <p className=" text-xl font-semibold text-black ">
                            Shoes
                        </p>                       
                    </div>                    
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-cover h-[40vh] sm:h-[50vh] lg:h-[60vh] aspect-square w-full" src="/img/men-clothing.jpg" alt="Category 3" />
                        <p className="text-xl font-semibold text-black ">
                            Clothing
                        </p>                       
                    </div>                    
                </div>    
            </div>
            <div className="px-4 sm:px-0 mt-16">
                <div className="flex items-center justify-between px-8 lg:px-12 ">
                    <h3 className="text-2xl font-semibold">Shop By Classics</h3>
                    <div className="space-x-4 hidden sm:flex">
                        <button   
                            onClick={() => slideScroll(scrollRef2, -300)}
                            aria-label="Slide back" type="button" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => slideScroll(scrollRef2, 300)}
                            aria-label="Slide forward" id="next" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef2}
                    className="flex items-center justify-start w-full gap-3 py-4 mx-auto overflow-x-scroll ">
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-vomero.jpg" alt="Classic 1" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Vomero
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-city.jpg" alt="Classic 2" />
                        <p className="text-xl font-semibold text-black ml-2">
                            C1TY
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-jordan.jpg" alt="Classic 3" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Air Jordan 1
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-dunk.jpg" alt="Classic 4" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Dunk
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-general.jpg" alt="Classic 5" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Field General
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-air.jpg" alt="Classic 6" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Air Force 1
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-max.jpg" alt="Classic 7" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Air Max
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-pegasus.jpg" alt="Classic 8" />
                        <p className="text-xl font-semibold text-black ml-2">
                            Pegasus
                        </p>                       
                    </div>  
                </div>    
            </div>         
        </div>
    )
}

export default Men
