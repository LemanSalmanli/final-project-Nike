import { CiTrash } from "react-icons/ci";
import { useAddToBasketMutation, useDeleteFromBasketMutation, useGetBasketItemsQuery } from "../../store/nikeApi"
import { FaQuestionCircle, FaRegHeart } from "react-icons/fa";
import { FiLoader, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

function Basket() {
    
    const {data: basketData, isLoading, isError} = useGetBasketItemsQuery() 
    const [orderedItems, setOrderedItems] = useState([])
    
    const [addToBasket] = useAddToBasketMutation()
    const [deleteFromBasket] = useDeleteFromBasketMutation()
    
    const [expanded, setExpanded] = useState(true)
    const handleAccChange = (panel) => (newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    
    useEffect(() => {
        if (basketData?.[0]?.items) {
            setOrderedItems((prev) => {
                if (prev.length === 0) {
                    return basketData[0]?.items
                }
                return prev.map(item => {
                    const updated = basketData[0]?.items?.find(
                        i => i.product.id === item.product.id && i.color === item.color && i.size === item.size
                    )
                    return updated || item
                })
            })
        }
    }, [basketData])
    
    const handleQuantityChange = async (item, changeAmount) => {
        try {
            await addToBasket({
                id: item?.product?.id, 
                color: item?.color,
                size: item?.size,
                quantity: changeAmount
            }).unwrap()            
        } catch (error) {
            console.error("Failed to update basket:", error);
        }
    }
    
   async function handleDelete(basketItemId) {
       try {
           await deleteFromBasket(basketItemId).unwrap()
            setOrderedItems(prev => prev.filter(item => item.id !== basketItemId))
        } catch (error) {
            console.error("Failed to delete item:", error)
        }
    }
    
    if (isLoading) return <div className="py-8 flex items-center justify-center"><FiLoader className="animate-spin w-15 h-15" /></div>
    if (!basketData || basketData?.length === 0) return <div className="py-8 flex items-center justify-center text-xl"><p>Your basket is empty</p></div>
    
    
    return (
        <div className="px-6">
            <div className="py-12 text-center lg:hidden">
                <h2 className="text-2xl  font-medium">Bag</h2>
                <p className="text-[#707072] lg:hidden">{basketData[0]?.totalItems} Items | <span className="text-[#111111]">${basketData[0]?.totalPrice}.00</span></p>
            </div>
            <div className="lg:flex justify-between items-start lg:w-[75%] m-auto gap-8">
                <div className="lg:w-[65%]">
                    <h2 className="text-2xl font-semibold hidden lg:block mt-8">Bag</h2>
                    <ul className=" border-t border-gray-300 lg:border-0">
                        {orderedItems?.map((item, index) => (
                            <li key={`${item?.product?.id}-${item?.color}-${item?.size}`} className=" py-8 border-b border-gray-300 space-y-8">
                                <div className="flex gap-4 ">
                                    <div className="space-y-4">
                                        <img 
                                            src={item?.product?.images[0]?.url} 
                                            alt={item?.product?.name} 
                                            className="w-36 h-36 lg:h-42 lg:w-42 object-cover"
                                        />
                                        <div className="flex gap-2">
                                            <div className="flex gap-3 items-center border border-gray-300 rounded-4xl">
                                                <button
                                                    onClick={() => {
                                                        if (item?.quantity === 1) {
                                                            handleDelete(item?.id)
                                                        } else {
                                                            handleQuantityChange(item, -1);
                                                        }
                                                    }} 
                                                    className="hover:bg-gray-200 rounded-full p-3 cursor-pointer">{item?.quantity === 1 ? <CiTrash /> : <FiMinus /> }</button>
                                                <span>{item?.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item, 1)} className="hover:bg-gray-200 rounded-full p-3 cursor-pointer"><FiPlus /></button>
                                            </div>
                                            <div className="flex gap-3 items-center border border-gray-300 rounded-4xl">
                                                <button className="hover:bg-gray-200 rounded-full p-3 cursor-pointer"><FaRegHeart /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:flex justify-between w-full">
                                        <p className="font-semibold lg:order-2">${Number(item?.product?.price).toFixed(2)}</p>
                                        <div>
                                            <h3 className="font-semibold">{item?.product?.name}</h3>
                                            <p className="text-[#707072]">Color: {item?.color}</p>
                                            <p className="text-[#707072]">Size: {item?.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <div> 
                                    <h3>Free Pickup</h3> 
                                    <Link to={'/retail'} className='border-b hover:border-b-2 cursor-pointer py-1'>
                                        Find a Store
                                    </Link> 
                                </div> 
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" py-8">
                    <h2 className="text-2xl font-semibold">Summary</h2>
                    <Accordion expanded={expanded === "panel"} onChange={handleAccChange("panel")} sx={{padding: 0,backgroundColor: 'transparent',boxShadow: 'none',  width: '100%'}}>
                        <AccordionSummary sx={{padding: 0}}>
                            <div className="flex items-center justify-between w-full">
                                <p className="text font-semibold cursor-pointer">
                                    Do you have a Promo Code?
                                </p>
                                <SlArrowDown className={`transition-transform duration-300 ${ expanded === "panel" ? "rotate-180" : ""}`}/>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails sx={{padding: 0}}>
                            <div className="flex gap-3">
                                <input className="border border-gray-400 w-full py-2 rounded-lg outline-none  focus:ring-0 appearance-none" type="text" />
                                <button className="border border-gray-400 px-6 py-1 text-[#707072] rounded-4xl cursor-pointer">Apply</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between black-text">
                            <h2 className="flex items-center gap-2">Subtotal <span><FaQuestionCircle /></span></h2>
                            <span>${basketData[0]?.totalPrice}.00</span>
                        </div>
                        <div className="flex items-center justify-between black-text">
                            <h2>Estimated Shipping & Handling</h2>
                            <span>Free</span>
                        </div>
                        <div className="flex items-center justify-between black-text">
                            <h2 className="flex items-center gap-2">Estimated Tax <span><FaQuestionCircle /></span></h2>
                            <span>-</span>
                        </div>
                        <div className="flex items-center justify-between text-lg black-text py-4 lg:border-y border-gray-300">
                            <h2>Total</h2>
                            <span>${basketData[0]?.totalPrice}.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
