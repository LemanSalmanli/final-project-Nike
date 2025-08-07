import 'swiper/css';
import 'swiper/css/free-mode';
import '../../index.css'
import Slider from '../../components/user/Slider'

function Home() {
  return (
    <>
        <Slider />
        <section className="sm:flex w-full">
            <div className="relative sm:w-1/2">
                <img src="/img/card1.avif" alt="Slide 1" className="w-full h-auto" />
                <div className="absolute bottom-6 left-0 px-6 transform z-10 text-white">
                    <h3 className="text-lg mb-2 " style={{ fontFamily: '"Helvetica Now Text Medium", Helvetica, Arial, sans-serif' }}>Back to Sport</h3>
                    <p className="text-2xl font-semibold mb-4 ">Practice Like A Pro</p>
                    <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-3xl font-medium transition">
                        Shop
                    </button>    
                </div>
            </div>
            <div className="relative sm:w-1/2">
                <img src="/img/card2.avif" alt="Slide 1" className="w-full h-auto" />
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
            <div className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
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
    </>
  )
}

export default Home
