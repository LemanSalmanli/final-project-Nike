import { Navigation, Pagination } from "swiper/modules"
import { useAddToBasketMutation } from "../../store/nikeApi"
import { useEffect, useRef, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { colorClasses } from "../../data/colors"
import * as Yup from 'yup'
import { SwiperSlide, Swiper} from "swiper/react"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router"

const validationSchema = Yup.object({
    color: Yup.string().required("Please select a color"),
    size: Yup.string().required("Please select a size"),
})

function DetailModal({item, openDetails, setOpenDetails, addedToBasket, setAddedToBasket}) {
    const [addToBasket, { isLoading: isAdding }] = useAddToBasketMutation()
    const [activeIndex, setActiveIndex] = useState(0) 
    const swiperRef = useRef(null)
    // const [addedToBasket, setAddedToBasket] = useState(false)

    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    
    
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await addToBasket({
                id: item?.id,
                color: values.color,
                size: values.size,
                quantity: 1,
            }).unwrap()
            setOpenDetails(null)
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setAddedToBasket(true)
            
        } catch (error) {
            console.error("Failed to add to basket:", error)
        } finally {
            setSubmitting(false)
        }
    }

        useEffect(() => {
            if (addedToBasket) {
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
        }, [addedToBasket])    

    return (
        <div>
            <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${openDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className="fixed inset-0 bg-[#1111115C] z-50"
                    onClick={() => setOpenDetails(null)}>
                </div>
                <div className={`
                    absolute bottom-0 left-0 
                    w-full h-[90%] lg:h-[80%]
                    lg:w-[90%] lg:-bottom-50 lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]
                    z-60 rounded-t-4xl lg:rounded-b-4xl bg-white text-black shadow-lg
                    transform transition-all duration-300 space-y-8
                    ${openDetails ? 'translate-y-0' : 'translate-y-full lg:translate-y-0 overflow-hidden'}            
                `}>
                    <div className=" lg:flex h-full overflow-y-scroll lg:overflow-hidden rounded-4xl scroll-hide ">
                        <div className="w-full lg:max-w-[50%] relative lg:h-full ">
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
                                        <img src={img.url} alt={`Slide ${index + 1}`} className="w-full rounded-lg object-center" />
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
                        <div className='px-10 py-12 lg:w-full black-text'>
                            <div> 
                                <h3 className="text-xl font-semibold">{item?.name}</h3> 
                                <p className="text-base">{item?.category.name} {}</p> 
                                <p className="text-base py-2">${Number(item?.price).toFixed(0)}</p> 
                            </div>
                            <Formik
                                key={openDetails ? item?.id : "closed"}
                                initialValues={{ color: "", size: "" }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ setFieldValue}) => (
                                    <Form className="flex flex-col gap-3">
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
                                            <div className="grid grid-cols-5 gap-2 py-4 w-full">
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
                                        <div className='py-4 flex justify-between items-center border-t border-gray-200 mt-10'> 
                                            <Link to={`/details/${item?.id}`} className="underline font-semibold hover:text-[#707072]">
                                                View Full Product
                                            </Link> 
                                            <button 
                                                type="submit"
                                                disabled={isAdding} 
                                                className={` text-white text-base font-semibold py-4 cursor-pointer px-8 w-fit ${!selectedColor || !selectedSize ? 'bg-gray-200' : 'bg-black'} rounded-4xl hover:bg-gray-500`}> 
                                                Add to Bag
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>   
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
                    <div className="fixed top-0 left-0 w-full h-fit lg:absolute lg:top-0 lg:right-16 lg:left-auto lg:w-[30%] lg:h-[30%]lg:rounded-t-none lg:rounded-b-4xl bg-white shadow-lg p-6 space-y-8 lg:space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                            {/* <div className="w-5 h-5 bg-green-600 text-white flex items-center justify-center rounded-full p-1">✔</div> */}
                            <span className="text-3xl">Added to Bag</span>
                            </div>
                            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer" onClick={() => setAddedToBasket(false)}>✖</button>
                        </div>

                        <div className="flex gap-4  ">
                            <img src={item?.images[0]?.url} alt="Item" className="h-40 lg:h-24 rounded-lg object-cover" />
                            <div>
                                <h3 className="font-semibold">{item?.name}</h3>
                                <p>Size: {selectedSize}</p>
                                <p>Color: {selectedColor}</p>
                                <p>${Number(item?.price).toFixed(0)}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link to="/basket" className="w-[50%] border  text-center border-gray-300 hover:border-black py-4 rounded-4xl">
                                View Bag
                            </Link>
                            <button className="w-[50%]  bg-black text-white text-center py-4 rounded-4xl hover:bg-gray-500 cursor-pointer">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    )
}

export default DetailModal
