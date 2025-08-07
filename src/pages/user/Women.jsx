import { useRef } from "react"
import { MdOutlineRemoveRedEye } from "react-icons/md"

function Women() {
    const scrollRef1 = useRef(null)
    const scrollRef2 = useRef(null)
    const scrollRef3 = useRef(null)

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
                <div className="w-[5%] text-2xl mb-4 lg:mb-0">Women</div>
                <div className="w-[95%] space-x-8 lg:text-center text-base overflow-x-auto scroll-hide whitespace-nowrap">
                    <span className="hover:text-gray-500 cursor-pointer">Shoes</span>
                    <span className="hover:text-gray-500 cursor-pointer">Clothing</span>
                    <span className="hover:text-gray-500 cursor-pointer">Accessories</span>
                </div>
            </div>
            <div className="relative w-full sm:h-[40vh] lg:h-[100vh] overflow-hidden">
                <video className="w-full   object-cover"  controls autoPlay muted loop>
                    <source src="/videos/women.mp4" type="video/mp4" />
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
            <div className="mt-8">
                <h3 className="text-2xl p-4 px-8 sm:px-16 font-semibold">Trending Now</h3>
                <div className="sm:flex w-full">
                    <div className="relative flex w-full ">
                        <img className="object-center w-full md:hidden" src="/img/women-trending-1.jpg" alt="Card 1" />
                        <img className="object-center w-full hidden md:block" src="/img/women-trending1-full.jpg" alt="Card 1 Full" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h5 className="text-base">Nike Universa Leggings</h5>
                            <h3 className="text-2xl">All Sculpt. No Sweat.</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                    <div className="relative flex w-full">
                        <img className="object-center w-full md:hidden" src="/img/women-trending-2.jpg" alt="Card 2" />
                        <img className="object-center w-full hidden md:block" src="/img/women-trending2-full.jpg" alt="Card 2 Full" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h5 className="text-base">Back to School</h5>
                            <h3 className="text-2xl">Day One Essentials</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="px-8 sm:px-12 lg:px-20 mt-16">
                <div className="px-4 lg:px-0 flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">Shop The Look</h3>
                    <div className="space-x-4 hidden sm:flex">
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
                    className="flex items-center justify-start w-full gap-3 py-4 mx-auto overflow-x-scroll ">
                    <div className="relative flex flex-shrink-0 flex-col gap-4">
                        <img className="object-center h-[50vh] sm:h-[70vh] lg:max-h-[70vh]" src="/img/women-look-1.jpg" alt="Image 1" />
                        <div className="absolute space-y-4 bottom-6 left-6 lg:bottom-12 lg:left-12 font-semibold">
                            <h3 className="text-white text-xl">Justine Skye</h3>
                            <button className=" w-fit flex items-center gap-1 text-base bg-white cursor-pointer text-black px-4 py-1 rounded-3xl whitespace-nowrap">
                                <MdOutlineRemoveRedEye className="text-xl" /> Shop the Look
                            </button>                    
                        </div>
                    </div>                    
                    <div className="relative flex flex-shrink-0 flex-col gap-4">
                        <img className="object-center h-[50vh] sm:h-[70vh] lg:max-h-[70vh]" src="/img/women-look-2.jpg" alt="Image 2" />
                        <div className="absolute space-y-4 bottom-6 left-6 lg:bottom-12 lg:left-12 font-semibold">
                            <h3 className="text-white text-xl">Chole Kim</h3>
                            <button className=" w-fit flex items-center gap-1 text-base bg-white cursor-pointer text-black px-4 py-1 rounded-3xl whitespace-nowrap">
                                <MdOutlineRemoveRedEye className="text-xl" /> Shop the Look
                            </button>                    
                        </div>
                    </div>                    
                    <div className="relative flex flex-shrink-0 flex-col gap-4">
                        <img className="object-center h-[50vh] sm:h-[70vh] lg:max-h-[70vh]" src="/img/women-look-3.jpg" alt="Image 3" />
                        <div className="absolute space-y-4 bottom-6 left-6 lg:bottom-12 lg:left-12 font-semibold">
                            <h3 className="text-white text-xl">Jordan Chiles</h3>
                            <button className=" w-fit flex items-center gap-1 text-base bg-white cursor-pointer text-black px-4 py-1 rounded-3xl whitespace-nowrap">
                                <MdOutlineRemoveRedEye className="text-xl" /> Shop the Look
                            </button>                    
                        </div>
                    </div>                    
                    <div className="relative flex flex-shrink-0 flex-col gap-4">
                        <img className="object-center h-[50vh] sm:h-[70vh] lg:max-h-[70vh]" src="/img/women-look-4.jpg" alt="Image 4" />
                        <div className="absolute space-y-4 bottom-6 left-6 lg:bottom-12 lg:left-12 font-semibold">
                            <h3 className="text-white text-xl">Gisele Thompson</h3>
                            <button className=" w-fit flex items-center gap-1 text-base bg-white cursor-pointer text-black px-4 py-1 rounded-3xl whitespace-nowrap">
                                <MdOutlineRemoveRedEye className="text-xl" /> Shop the Look
                            </button>                    
                        </div>
                    </div> 
                </div>    
            </div>
            <div className="mt-12 px-8 md:px-16">
                <h3 className="text-2xl py-4 font-semibold">Fresh Fall Gear</h3>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <div className="relative flex w-full ">
                        <img className="object-center w-full " src="/img/women-fresh-1.avif" alt="Card 1" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h3 className="text-2xl">Best Sellers</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                    <div className="relative flex w-full">
                        <img className="object-center w-full " src="/img/women-fresh-2.avif" alt="Card 2" />
                        <div className="text-white  font-semibold absolute bottom-4 lg:bottom-12 lg:left-12 left-4 space-y-2.5">
                            <h3 className="text-2xl">A'One Collection</h3>
                            <button className="w-fit my-2 font-semibold bg-white text-black cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-3xl whitespace-nowrap">
                                Shop
                            </button>      
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-16 mt-16">
                <div className="flex items-center justify-between  px-6 ">
                    <h3 className="text-2xl font-semibold">Shop By Collection</h3>
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
                    className="flex items-center justify-start w-full gap-3 py-4 mx-auto px-6 overflow-x-scroll ">
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-cover w-full max-h-[45vh]" src="/img/women-collect-1.jpg" alt="Collection 1" />
                        <div className=" font-semibold text-black space-y-2">
                            <p className="text-base">Tailored For All-Day Comfort</p>
                            <p className="text-xl">Nike 24.7</p>
                        </div>                  
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full max-h-[45vh]" src="/img/women-collect-2.jpg" alt="Collection 2" />
                        <div className=" font-semibold text-black space-y-2">
                            <p className="text-base">Your One And Only Layer</p>
                            <p className="text-xl">Nike Form</p>
                        </div>                      
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full max-h-[45vh]" src="/img/women-collect-3.jpg" alt="Collection 3" />
                        <div className=" font-semibold text-black space-y-2">
                            <p className="text-base">Strength Training Essentials</p>
                            <p className="text-xl">Nike Pro</p>
                        </div>                        
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full max-h-[45vh]" src="/img/women-collect-4.jpg" alt="Collection 4" />
                        <div className=" font-semibold text-black  space-y-2">
                            <p className="text-base">Softness That Lasts</p>
                            <p className="text-xl">Nike Zenvy</p>
                        </div>                      
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full max-h-[45vh]" src="/img/women-collect-5.jpg" alt="Collection 5" />
                        <div className=" font-semibold text-black  space-y-2">
                            <p className="text-base">Run Ready</p>
                            <p className="text-xl">Nike Swift</p>
                        </div>                      
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full max-h-[45vh]" src="/img/women-collect-6.jpg" alt="Collection 6" />
                        <div className=" font-semibold text-black  space-y-2">
                            <p className="text-base">The Blueprint to Success</p>
                            <p className="text-xl">Sabrina lonescu</p>
                        </div>                      
                    </div>  
                     
                   
                </div>    
            </div>   
            <div className="relative mt-20 p-4 sm:px-8 md:px-12 w-full h-[50vh] sm:h-[100vh] md:max-h-[60vh]">
                <video className="w-full object-cover h-full"  controls autoPlay muted loop>
                    <source src="/videos/women-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-8 left-14 lg:bottom-16 lg:left-24 px-1 text-white space-y-2 ">
                    <p>Nike Style</p>
                    <h3 className="text-4xl sm:text-4xl lg:text-6xl  font-extrabold">INSPO FOR YOU</h3>
                    <button className="bg-white cursor-pointer my-2 hover:bg-gray-300 text-black px-4 py-1 rounded-3xl font-medium transition">
                        Explore
                    </button>
                </div>
            </div>
            <div className="px-4 sm:px-0 mt-16">
                <div className="flex items-center justify-between px-8 lg:px-12 ">
                    <h3 className="text-2xl font-semibold">Shop By Classics</h3>
                    <div className="space-x-4 hidden sm:flex">
                        <button   
                            onClick={() => slideScroll(scrollRef3, -300)}
                            aria-label="Slide back" type="button" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <button
                            onClick={() => slideScroll(scrollRef3, 300)}
                            aria-label="Slide forward" id="next" className="bg-opacity-50 rounded-full focus:outline-none bg-gray-200 hover:bg-gray-300 text-gray-600 cursor-pointer p-4">
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    ref={scrollRef3}
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

export default Women
