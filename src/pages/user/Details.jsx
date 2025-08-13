import { useRef, useState } from 'react';
import { Link, useParams } from "react-router";
import { useGetProductByIdQuery } from "../../store/nikeApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Loader2 } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

function Details() {
    const { id } = useParams()
    const { data: item, isLoading, isError } = useGetProductByIdQuery(id)
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0) 
    const [openDetails, setOpenDetails] = useState(false) 

    if (isLoading) return <Loader2 />
    if (isError) return <p>Error loading product</p>

  return (
   <div className='relative'>
        <div className="bg-[#F5F5F5] px-4 py-2 text-center text-xs underline font-semibold border-b border-gray-300">
            <h5>Up to 50% Off Select Styles: Use code SPORT</h5>    
        </div>
        <div className=" lg:group-hover:hidden font-medium p-6">
            <h3 className="black-text text-xl">{item?.name}</h3>
            <p className="text-gray-600 text-base">{item?.category.name} {}</p>
            <p className="black-text text-base py-2">${Number(item?.price).toFixed(0)}</p>
        </div>
        <div className=' gap-8'>
            <div>
                <div className="sm:block relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        style={{
                            "--swiper-pagination-color": "white",
                            "--swiper-pagination-bullet-inactive-color": "black",
                        }}
                    >
                    {item?.images?.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img.url} alt={`Slide ${index + 1}`} className="w-full lg:w-30" />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
                        <button 
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                            className="cursor-pointer text-3xl text-gray-500"
                        >
                            <MdNavigateBefore />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
                        <button 
                            onClick={() => swiperRef.current.swiper.slideNext()}
                            className="cursor-pointer text-3xl text-gray-500"
                        >
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
                <div className='flex gap-2 overflow-x-scroll scroll-hide py-2'>
                    {item?.images?.map((img, index) => (
                        <div 
                            key={index} 
                            className="cursor-pointer" 
                            onClick={() => {
                            swiperRef.current.swiper.slideToLoop(index)
                            setActiveIndex(index)
                            }}
                        >
                            <img 
                                src={img.url} 
                                alt={`Image ${index + 1}`} 
                                className={`min-w-24 max-w-30 border-1 ${activeIndex === index ? 'border-black ' : 'border-transparent'}`} 
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-6 py-8'>
                    <div className='flex-flex-col items-center w-full justify-center'>
                        <h3 className='text-base font-medium black-text'>Select Size</h3>
                        <div className="flex flex-wrap gap-2 py-4 w-full">
                            {item?.sizes?.map((size) => (
                                <label
                                    key={size}
                                    htmlFor={`${size}-radio`}
                                    className="cursor-pointer flex flex-col gap-1 items-center flex-grow flex-shrink basis-20 max-w-30"
                                >
                                    <input
                                        id={`${size}-radio`}
                                        type="radio"
                                        name="sizes"
                                        className="hidden peer"
                                    />
                                    <div className="border border-gray-300 rounded-lg py-1.5 w-full text-center peer-checked:border-black">
                                        {size && typeof size === 'string' ? size : size.slice(2)}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='py-4 flex flex-col gap-4'>
                        <button className='bg-black text-white text-base font-semibold py-4 cursor-pointer w-full rounded-4xl hover:bg-gray-500'>
                            Add to Bag
                        </button>
                        <button className='flex gap-2 items-center justify-center text-black bg-white border border-gray-300 hover:border-black text-base font-medium py-4 cursor-pointer w-full rounded-4xl'>
                            Favorite <CiHeart className='text-2xl' />
                        </button>
                    </div>
                    <div className='black-text space-y-8 py-6'>
                        <div>
                            <h3  className='font-semibold'>Shipping</h3>
                            <p>You'll see our shipping options at checkout.</p>
                        </div>
                        <div>
                            <h3 className='font-semibold'>Free Pickup</h3>
                            <Link to={'/retail'} className='border-b hover:border-b-2 cursor-pointer py-1'>Find a Store</Link>
                        </div>
                        <p>{item?.description}</p>
                        <h3>● Shown: {item?.colors[0]}</h3>
                        <button onClick={() => setOpenDetails(true)} className='border-b-2 py-1 font-semibold hover:text-gray-500 cursor-pointer'>View Product Details</button>
                            
                    </div>
            </div>
        </div>
       {/* <div className='fixed bottom-0 bg-black text-white font-semibold py-6 w-full text-center cursor-pointer hover:bg-gray-500'>
            <button >Add to Bag</button>
       </div> */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div
                className="fixed inset-0 bg-[#1111115C] z-50"
                onClick={() => setOpenDetails(false)}>
            </div>
            <div className={`absolute bottom-0 left-0 w-full z-60 rounded-4xl h-[70%] space-y-8 bg-white overflow-y-scroll text-black px-6 py-10 shadow-lg transform transition-all duration-300 ${openDetails ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className='flex items-start justify-between gap-8'>
                    <div className='flex gap-4'>
                        <img className='h-16 rounded-lg aspect-square object-fit' src={`${item?.images[0]?.url}`} alt="Item " />
                        <div className=" text-base black-text">
                            <h3>{item?.name}</h3>
                            <p className="">${Number(item?.price).toFixed(0)}</p>
                        </div>
                    </div>
                    <button className='w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-300 cursor-pointer rounded-full  font-light  text-2xl' onClick={() => setOpenDetails(false)}>✖</button>
                </div>
                <p className='text-lg black-text'>{item?.description}</p>
                <div>
                    <h3 className='text-xl font-medium'>Product Details:</h3>
                    <div className='px-4'>
                        <span className='font-semibold text-lg'>● Colors:</span> 
                        <span className='px-2'>{item?.colors?.join(', ')}</span>
                    </div>
                    <div className='px-4'>
                        <span className='font-semibold text-lg'>● Sizes:</span> 
                        <span className='px-2'>{item?.sizes?.join(', ')}</span>
                    </div>

                </div>


            </div>
        </div>


   </div>
  );
}

export default Details;