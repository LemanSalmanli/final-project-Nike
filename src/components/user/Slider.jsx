import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaChevronCircleLeft, FaChevronCircleRight, FaPause, FaPlay, FaRegPauseCircle, FaRegPlayCircle } from 'react-icons/fa';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Slider = () => {
  const mobileSwiperRef = useRef(null)
  const desktopSwiperRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleAutoplay = (ref) => {
    const swiper = ref.current?.swiper
    if (!swiper) return

    if (isPlaying) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <div className="block sm:hidden relative">
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
                    <img src="/img/slide1mob.avif" alt="Slide 1" className="w-full h-auto" />
                    <div className="absolute bottom-20 left-4 transform  z-10 text-white w-[90%]">
                        <h3 className="text-4xl font-bold mb-2">TOO EASY</h3>
                        <p className="text-lg mb-4">True greats make greatness look easy.</p>
                        <div className='flex flex-wrap gap-2 '>
                            <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                                Shop
                            </button>
                            <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition flex gap-2 items-center">
                                Watch <FaPlay />
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="/img/slide2mob.avif" alt="Slide 2" className="w-full h-auto" />
                    <div className="absolute bottom-20 left-4 transform  z-10 text-white w-[90%]">
                        <h3 className="text-4xl font-bold mb-2">Game Heat collection</h3>
                        <p className="text-lg mb-4">The intensity coming off the floor will set WNBA All-Star Weekend ablaze.</p>
                        <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                            Shop
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="/img/slide3mob.avif" alt="Slide 3" className="w-full h-auto" />
                    <div className="absolute bottom-20 left-4 transform z-10 text-white w-[90%]">
                        <h3 className="text-4xl font-bold mb-2">RUN SUPPORTED</h3>
                        <p className="text-lg mb-4">Supportive cushioning in the new Nike Structure 26 helps keep runners running.</p>
                        <div className='flex gap-2 flex-wrap'>
                            <button className="bg-white cursor-pointer whitespace-nowrap text-black px-4 py-2 rounded-3xl font-medium transition">
                                Notify Me
                            </button>
                            <button className="bg-white cursor-pointer  text-black px-4 py-2 rounded-3xl font-medium transition">
                                Shop All Running
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
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

      <div className="hidden sm:block relative">
        <Swiper
            ref={desktopSwiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
            nextEl: '.desktop-next',
            prevEl: '.desktop-prev',
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
                    <img src="/img/slide1desk.avif" alt="Slide 1" className="w-full h-auto parallax-bg" />
                    <div className="absolute bottom-20 left-0 px-6 lg:px-10 lg:bottom-24 transform z-10 text-white w-[90%]" data-swiper-parallax="-100">
                        <h3 className="text-4xl font-bold mb-2 lg:text-6xl" data-swiper-parallax="-200" style={{ fontFamily: '"Helvetica Now Text Medium", Helvetica, Arial, sans-serif' }}>TOO EASY</h3>
                        <p className="text-lg mb-4 lg:text-xl">True greats make greatness look easy.</p>
                        <div className='flex flex-wrap gap-2 '>
                            <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                                Shop
                            </button>
                            <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition flex gap-2 items-center">
                                Watch <FaPlay />
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img src="/img/slide2desk.avif" alt="Slide 2" className="w-full h-auto" />
                    <div className="absolute bottom-20 left-0 px-6 lg:px-10 lg:bottom-24 transform z-10 text-white w-[70%]" data-swiper-parallax="-100">
                        <h3 className="text-4xl font-bold mb-2 lg:text-6xl" style={{ fontFamily: '"Helvetica Now Text Medium", Helvetica, Arial, sans-serif' }}>GAME HEAT COLLECTION</h3>
                        <p className="text-lg mb-4 lg:text-xl">The intensity coming off the floor will set WNBA All-Star Weekend ablaze.</p>
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
                    <img src="/img/slide3desk.avif" alt="Slide 3" className="w-full h-auto" />
                    <div className="absolute bottom-20 left-0 px-6 lg:px-10 lg:bottom-24 transform z-10 text-white w-[50%]">
                        <h3 className="text-4xl font-bold mb-2 lg:text-6xl">RUN SUPPORTED</h3>
                        <p className="text-lg mb-4 lg:text-xl">Supportive cushioning in the new Nike Structure 26 helps keep runners running.</p>
                        <div className='flex flex-wrap gap-2 '>
                            <button className="bg-white cursor-pointer whitespace-nowrap text-black px-4 py-2 rounded-3xl font-medium transition">
                                Notify Me
                            </button>
                            <button className="bg-white cursor-pointer  text-black px-4 py-2 rounded-3xl font-medium transition">
                                Shop All Running
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
          
        </Swiper>

        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <button
                onClick={() => toggleAutoplay(desktopSwiperRef)}
                className="bg-transparent cursor-pointer p-2 rounded-full text-white border border-white text-lg h-10 w-10 text-center flex items-center justify-center"
            >
                {isPlaying ? <FaPause/> : <FaPlay />}
            </button> 
            <button className="desktop-prev cursor-pointer bg-gray-200 p-2 rounded-full shadow text-2xl text-gray-500"><MdNavigateBefore /></button>
            <button className="desktop-next cursor-pointer bg-gray-200 p-2 rounded-full shadow text-2xl text-gray-500"><MdNavigateNext /></button>
        </div>
      </div>
    </div>
  )
}



export default Slider;
