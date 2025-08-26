import { useEffect, useRef, useState } from 'react';
import {  Link, useParams } from "react-router";
import { useAddToBasketMutation, useGetProductByIdQuery } from "../../store/nikeApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Loader2 } from 'lucide-react';
import { colorClasses } from '../../data/colors';
import * as Yup from 'yup'
import { Form, ErrorMessage, Field, Formik } from 'formik';
import { FaHeart } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';
import { FiLoader } from 'react-icons/fi';

const validationSchema = Yup.object({
    color: Yup.string().required("Please select a color"),
    size: Yup.string().required("Please select a size"),
})

function Details() {
    const { id } = useParams()
    const { data: item, isLoading, isError } = useGetProductByIdQuery(id)
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0) 
    const [openDetails, setOpenDetails] = useState(false)
    const [addedToBasket, setAddedToBasket] = useState(false)
    const [addedToFavs, setAddedToFavs] = useState(false)
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || []
        setIsFavorite(favorites.includes(+id))
    }, [id])  

    const [addToBasket, { isLoading: isAdding }] = useAddToBasketMutation()

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await addToBasket({
                id,
                color: values.color,
                size: values.size,
                quantity: 1,
            }).unwrap()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setAddedToBasket(true)
        } catch (error) {
            console.error("Failed to add to basket:", error)
        } finally {
            setSubmitting(false)
        }
    }

    function handleFavorite(productId) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || []
        if (favorites.includes(productId)) {
            favorites = favorites.filter((id) => id !== productId)
            setIsFavorite(false)
        } else {
            favorites.push(productId)
            setIsFavorite(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setAddedToFavs(true)
            setTimeout(() => setAddedToFavs(false), 15000)
        }
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    
    useEffect(() => {
        if (addedToBasket || addedToFavs) {
            document.body.style.overflow = 'hidden'
            const timer = setTimeout(() => {
                setAddedToBasket(false)
            }, 15000)

            return () => {
                clearTimeout(timer)
                document.body.style.overflow = 'auto'
            }
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [addedToBasket, addedToFavs])

    

    if (isLoading) return  <div className="py-8 flex items-center justify-center"><FiLoader className="animate-spin w-15 h-15" /></div>
    if (isError) return <p>Error loading product</p>

  return (
   <div className='relative'>
        <div className="bg-[#F5F5F5] p-4 text-center text-xs underline font-semibold border-b border-gray-300">
            <h5>Up to 50% Off Select Styles: Use code SPORT</h5>    
        </div>
        <div className=" lg:hidden p-6">
            <h3 className="black-text text-xl tracking-wide">{item?.name}</h3>
            <p className="text-gray-600 text-base">{item?.category.name} {}</p>
            <p className="black-text text-base py-2">${Number(item?.price).toFixed(0)}</p>
        </div>
        <div className='gap-8 lg:flex lg:py-12 lg:w-[70%] m-auto'>
            <div className="lg:sticky top-12 flex flex-col lg:flex-row lg:w-[50%] lg:h-fit gap-4 lg:justify-between lg:items-start">
                <div className="flex gap-2 overflow-x-scroll lg:overflow-x-visible scroll-hide py-2 lg:py-0 lg:flex-col lg:w-[50%] order-3 ">
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
                                className={`min-w-24 max-w-30 rounded-lg border-1 w-full ${activeIndex === index ? 'border-black' : 'border-transparent'}`} 
                            />
                        </div>
                    ))}
                </div>
                <div className="relative w-full lg:w-[78%] h-fit order-2 lg:order-4">
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
                                <img src={img.url} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
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
            </div>
            <div className='px-6 py-8 lg:py-0 lg:w-[50%]'>
                <div className="hidden lg:block font-medium"> 
                    <h3 className="black-text text-xl">{item?.name}</h3> 
                    <p className="text-gray-600 text-base">{item?.category.name} {}</p> 
                    <p className="black-text text-base py-2">${Number(item?.price).toFixed(0)}</p> 
                </div>
                <Formik
                    initialValues={{ color: "", size: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue}) => (
                        <Form className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-base font-semibold black-text">Select Color</h3>
                                <div className="flex gap-4 py-4 w-full">
                                    {item?.colors?.map((color) => (
                                        <label key={color} className="cursor-pointer flex flex-col gap-1 items-center">
                                            <Field
                                                type="radio"
                                                name="color"
                                                value={color}
                                                className={`${colorClasses[color]} w-7 h-7 rounded-full cursor-pointer`}
                                                onClick={() => {
                                                    setFieldValue('color', color)
                                                    setSelectedColor(color)
                                                }}
                                            />
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage
                                    name="color"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold black-text">Select Size</h3>
                                <div className="grid grid-cols-2 gap-2 py-4 w-full">
                                    {item?.sizes?.map((size) => (
                                        <label
                                            key={size}
                                            className="cursor-pointer flex flex-col gap-1 items-center"
                                        >
                                            <Field
                                                type="radio"
                                                name="size"
                                                value={size}
                                                className="hidden peer"
                                                onClick={() => {
                                                    setFieldValue('size', size)
                                                    setSelectedSize(size)
                                                }}
                                            />
                                            <div className="border border-gray-300 rounded-lg py-1.5 w-full text-center peer-checked:border-black">
                                                {size}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <ErrorMessage
                                    name="size"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <div className='py-4'> 
                                <button 
                                    type="submit"
                                    disabled={isAdding} 
                                    className="bg-black text-white text-base font-semibold py-4 cursor-pointer w-full rounded-4xl hover:bg-gray-500" 
                                > 
                                    {isAdding ? "Adding..." : "Add to Bag"} 
                                </button> 
                            </div>
                        </Form>
                    )}
                </Formik>
                <div>
                    <button onClick={()=> handleFavorite(item?.id)} className='flex gap-2 items-center justify-center text-black bg-white border border-gray-300 hover:border-black text-base font-medium py-4 cursor-pointer w-full rounded-4xl'> 
                        {isFavorite ? (
                            <span className='flex items-center gap-3 text-lg'>Favorited <FaHeart className="text-xl" /></span>
                        ) : (
                            <span className='flex items-center gap-3 text-lg'>Favorite <CiHeart className="text-xl" /></span>
                        )}                    
                    </button> 
                </div>
                <div className='black-text space-y-8 py-6'> 
                    <div> 
                        <h3 className='font-semibold'>Shipping</h3> 
                        <p>You'll see our shipping options at checkout.</p> 
                    </div> 
                    <div> 
                        <h3 className='font-semibold'>Free Pickup</h3> 
                        <Link to={'/retail'} className='border-b hover:border-b-2 cursor-pointer py-1'>
                            Find a Store
                        </Link> 
                    </div> 
                        <p>{item?.description}</p> 
                        <h3>● Shown: {item?.colors[0]}</h3> 
                        <button onClick={() => setOpenDetails(true)} className='border-b-2 py-1 font-semibold hover:text-gray-500 cursor-pointer'>View Product Details</button> 
                </div>
            </div>
        </div>
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div
                className="fixed inset-0 bg-[#1111115C] z-50"
                onClick={() => setOpenDetails(false)}>
            </div>
            <div className={`
                absolute bottom-0 left-0 
                w-full h-[60%] 
                lg:w-[60%] lg:-bottom-14 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]
                z-60 rounded-t-4xl lg:rounded-b-4xl bg-white text-black px-6 py-10 shadow-lg
                transform transition-all duration-300 space-y-8
                ${openDetails ? 'translate-y-0' : 'translate-y-full lg:translate-y-0'}            
            `}>
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
                <p className='text-base black-text'>{item?.description}</p>
                <div>
                    <h3 className='text-lg font-medium'>Product Details:</h3>
                    <div className='px-4'>
                        <span className='font-semibold'>● Colors:</span> 
                        <span className='px-2'>{item?.colors?.join(', ')}</span>
                    </div>
                    <div className='px-4'>
                        <span className='font-semibold'>● Sizes:</span> 
                        <span className='px-2'>{item?.sizes?.join(', ')}</span>
                    </div>

                </div>
            </div>
        </div>
        {addedToBasket &&  (
            <div className="fixed inset-0 z-50 lg:absolute">
                <div
                    className="absolute inset-0 bg-[#1111115C]"
                    onClick={() => setAddedToBasket(false)}
                ></div>
                <div className="fixed bottom-0 left-0 w-full h-[60%] lg:absolute lg:top-0 lg:right-16 lg:left-auto lg:w-[30%] lg:h-[30%] rounded-t-4xl lg:rounded-t-none lg:rounded-b-4xl bg-white shadow-lg p-6 space-y-8 lg:space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                        <div className="w-5 h-5 bg-green-600 text-white flex items-center justify-center rounded-full p-1">✔</div>
                        <span>Added to Bag</span>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer" onClick={() => setAddedToBasket(false)}>✖</button>
                    </div>

                    <div className="flex gap-4">
                        <img src={item?.images[0]?.url} alt="Item" className="h-32 lg:h-24 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-semibold">{item?.name}</h3>
                            <p>Size: {selectedSize}</p>
                            <p>Color: {selectedColor}</p>
                            <p>${Number(item?.price).toFixed(0)}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="/basket" className="border text-center border-gray-300 hover:border-black py-4 rounded-4xl">
                            View Bag
                        </Link>
                        <button className=" bg-black text-white text-center py-4 rounded-4xl hover:bg-gray-500 cursor-pointer">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        )}

        {addedToFavs && (
            <div className="fixed inset-0 z-50 lg:absolute">
                <div
                    className="absolute inset-0 bg-[#1111115C]"
                    onClick={() => setAddedToFavs(false)}
                ></div>
                <div className="fixed bottom-0 left-0 w-full h-[50%] lg:absolute lg:top-0 lg:right-16 lg:left-auto lg:w-[30%] lg:h-[20%] rounded-t-4xl lg:rounded-t-none lg:rounded-b-4xl bg-white shadow-lg p-6 space-y-8 lg:space-y-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                        <div className="w-5 h-5 bg-green-600 text-white flex items-center justify-center rounded-full p-1">✔</div>
                        <span>Added to Favorites</span>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer" onClick={() => setAddedToFavs(false)}>✖</button>
                    </div>

                    <div className="flex gap-4">
                        <img src={item?.images[0]?.url} alt="Item" className="h-32 lg:h-24 rounded-lg object-cover" />
                        <div>
                            <h3 className="font-semibold">{item?.name}</h3>
                            <p className="text-[#707072] text-base">{item?.category.name} {}</p>
                            <p>${Number(item?.price).toFixed(0)}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Link to="/favorites" className="border text-center bg-black text-white py-4 rounded-4xl">
                            View Favorites
                        </Link>
                    </div>
                </div>
            </div> 
        )}

   </div>
  );
}

export default Details;