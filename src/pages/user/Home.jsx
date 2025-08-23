import '../../index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router';

function Home() {
    const mobileSwiperRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(true)
    const scrollRef2 = useRef(null)

    const slideScroll = (ref, offset) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: offset,
                behavior: 'smooth',
            })
        }
    }


    const toggleAutoplay = (ref) => {
    const swiper = ref.current?.swiper
    if (!swiper) return

    if (isPlaying) {
        swiper.autoplay.stop()
        document.querySelectorAll("video").forEach((video) => {
        video.pause()
        })
    } else {
        swiper.autoplay.start()
        document.querySelectorAll("video").forEach((video) => {
        video.play()
        })
    }
    setIsPlaying(!isPlaying)
    }
    return (
        <>
            <div className="relative">
                <Swiper
                    ref={mobileSwiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.mobile-next',
                        prevEl: '.mobile-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    style={{
                            '--swiper-pagination-color': 'white',
                            '--swiper-pagination-bullet-inactive-color': 'gray',
                    }}
                >
                    <SwiperSlide>
                        <div className="relative">
                            <video className="w-full h-[100vh] object-cover sm:hidden"  playsInline autoPlay muted loop>
                                <source src="/videos/main1mob.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <video className="w-full h-auto object-cover hidden sm:block"  playsInline autoPlay muted loop>
        \                        <source src="/videos/main1.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute left-1/2 bottom-20 transform  -translate-x-1/2 w-full  flex flex-col items-center justify-center z-10 text-white ">
                                <h3 className="text-4xl font-extrabold mb-2 lg:text-6xl">VOMERO PLUS</h3>
                                <p className="text-lg mb-4">More cushoined. More comfort. More running.</p>
                                <div className='flex flex-wrap gap-2 '>
                                    <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                                        Shop
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <video className="w-full  h-[100vh] object-cover sm:hidden"  playsInline autoPlay muted loop>
                                <source src="/videos/main2mob.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <video className="w-full h-auto object-cover hidden sm:block"  playsInline autoPlay muted loop>
        \                        <source src="/videos/main2.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute left-1/2 bottom-20 transform  -translate-x-1/2 w-full  flex flex-col items-center justify-center z-10 text-white">
                                <h3 className="text-4xl font-extrabold mb-2 lg:text-6xl">NIKE AVA ROVER</h3>
                                <p className="text-lg mb-4">Made for the city with responsive ReactX cushioning.</p>
                                <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                                    Shop
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <img src="/img/mainslide3mob.jpg" alt="Slide 3" className="w-full  h-[100vh] parallax-bg sm:hidden" />
                            <img src="/img/mainslide3full.jpg" alt="Slide 3" className="w-full h-auto parallax-bg hidden sm:block" />
                            <div className="absolute left-1/2 bottom-20 transform  -translate-x-1/2 w-full  flex flex-col items-center justify-center z-10 text-white">
                                <h3 className="text-4xl font-extrabold mb-2 lg:text-6xl">NIKE SHOX</h3>
                                <p className="text-lg mb-4">Experience an icon straight from the archives.</p>
                                <div className='flex gap-2 flex-wrap'>
                                    <button className="bg-white cursor-pointer whitespace-nowrap text-black px-4 py-2 rounded-3xl font-medium transition">
                                        Shop
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="absolute bottom-6 sm:bottom-6 right-4 z-10 flex gap-2">
                <button
                        onClick={() => toggleAutoplay(mobileSwiperRef)}
                        className="bg-transparent cursor-pointer p-2 rounded-full text-white border border-white text-lg h-10 w-10 text-center flex items-center justify-center"
                    >
                        {isPlaying ? <FaPause/> : <FaPlay />}
                    </button> 
                    <button className="mobile-prev cursor-pointer bg-gray-200 p-2 rounded-full shadow text-2xl text-gray-500"><MdNavigateBefore /></button>
                    <button className="mobile-next cursor-pointer bg-gray-200 p-2 rounded-full shadow text-2xl text-gray-500"><MdNavigateNext /></button>

                </div>
            </div>
            <section className="sm:flex w-full">
                <div className="relative sm:w-1/2 ">
                    <img src="/img/homecard1mob.jpg" alt="Card 1" className="w-full  h-[100vh] object-center sm:hidden" />
                    <img src="/img/homecard1full.jpg" alt="Card 1" className="w-full max-h-[90vh] object-center hidden sm:block" />
                    <div className="absolute bottom-6 left-0 px-6 transform z-10 text-white">
                        <h3 className="text-lg mb-2 " style={{ fontFamily: '"Helvetica Now Text Medium", Helvetica, Arial, sans-serif' }}>Back to Sport</h3>
                        <p className="text-2xl font-semibold mb-4 ">Practice Like A Pro</p>
                        <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                            Shop
                        </button>    
                    </div>
                </div>
                <div className="relative sm:w-1/2">
                    <img src="/img/homecard2mob.jpg" alt="Card 2" className="w-full  h-[100vh] object-center sm:hidden" />
                    <img src="/img/homecard2full.jpg" alt="Card 2" className="w-full max-h-[90vh] object-center hidden sm:block" />
                    <div className="absolute bottom-6 left-0 px-6 transform z-10 text-white">
                        <h3 className="text-lg mb-2 " style={{ fontFamily: '"Helvetica Now Text Medium", Helvetica, Arial, sans-serif' }}>Women's Air Jordan 3 'Starfish'</h3>
                        <p className="text-2xl font-semibold mb-4 ">Light Work, Heavy Hitter</p>
                        <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                            Shop
                        </button>    
                    </div>
                </div>
                
            </section>
            <section className="p-4 lg:py-8 lg:px-12 ">
                <div className="flex gap-4 overflow-x-scroll overflow-y-hidden scroll-hide">
                    <div className="relative min-w-[300px] ">
                        <img src="/img/slider1.avif" alt="Slide 2" className="w-full h-auto" />
                        <button className="absolute bottom-5 left-4 z-10 bg-white text-black px-4 py-2 rounded-3xl font-medium cursor-pointer transition">
                            Shop Training
                        </button>
                    </div>
                    <div className="relative min-w-[300px]">
                        <img src="/img/slider2.avif" alt="Slide 3" className="w-full h-auto" />
                        <button className="absolute bottom-5 left-4 z-10 bg-white text-black px-4 py-2 rounded-3xl font-medium cursor-pointer transition">
                        Shop Running
                        </button>
                    </div>
                    <div className="relative min-w-[300px]">
                        <img src="/img/slider3.avif" alt="Slide 4" className="w-full h-auto" />
                        <button className="absolute bottom-5 left-4 z-10 bg-white text-black px-4 py-2 rounded-3xl font-medium cursor-pointer transition">
                        Shop Golf
                        </button>
                    </div>
                </div>

            </section>
            <section className="px-4 sm:px-0 mt-16">
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
                    <Link to={`/products?brandId=${20}`} className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-vomero.jpg" alt="Classic 1" />
                        <p className="text-xl text-black ml-2">
                            Vomero
                        </p>                       
                    </Link>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-city.jpg" alt="Classic 2" />
                        <p className="text-xl text-black ml-2">
                            C1TY
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-jordan.jpg" alt="Classic 3" />
                        <p className="text-xl text-black ml-2">
                            Air Jordan 1
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-dunk.jpg" alt="Classic 4" />
                        <p className="text-xl text-black ml-2">
                            Dunk
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-general.jpg" alt="Classic 5" />
                        <p className="text-xl text-black ml-2">
                            Field General
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-air.jpg" alt="Classic 6" />
                        <p className="text-xl text-black ml-2">
                            Air Force 1
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-max.jpg" alt="Classic 7" />
                        <p className="text-xl text-black ml-2">
                            Air Max
                        </p>                       
                    </div>  
                    <div className="flex flex-shrink-0 flex-col gap-4 cursor-pointer">
                        <img className="object-center w-full lg:max-h-[45vh]" src="/img/men-pegasus.jpg" alt="Classic 8" />
                        <p className="text-xl text-black ml-2">
                            Pegasus
                        </p>                       
                    </div>  
                </div>    
            </section>   
        </>
    )
}

export default Home
