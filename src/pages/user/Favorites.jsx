import { FiLoader } from "react-icons/fi";
import { useGetAllProductsQuery, useGetProductByIdQuery } from "../../store/nikeApi";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import DetailModal from "../../components/user/DetailModal";

function Favorites() {
    const [openDetails, setOpenDetails] = useState(null)
    const [favIDs, setFavIDs] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    )
    const [addedToBasket, setAddedToBasket] = useState(null)
    const { data: products, isLoading } = useGetAllProductsQuery()

    function deleteFromFavorites(productId) {
        const updatedFavorites = favIDs.filter((id) => id !== productId)
        setFavIDs(updatedFavorites)
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    const favProducts = products?.filter((p) => favIDs.includes(p.id))    
        
    if (isLoading) return <div className="py-8 flex items-center justify-center"><FiLoader className="animate-spin w-15 h-15" /></div>
    if (favIDs.length === 0) return <div className="py-24 flex items-center justify-center text-lg"><p>Items added to your Favorites will be saved here.</p></div>
    
    return (
        <div className="px-4 lg:px-12  relative">
            <h2 className="text-2xl  font-medium py-10">Favorites</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {favProducts?.map(item =>
                    <div key={item?.id}>
                        <div className="flex flex-col gap-2 pb-12">
                            <div className="relative">
                                <div >
                                    <Link to={`/details/${item?.id}`}  className="aspect-square overflow-hidden">
                                        <img className="object-center" src={item?.images[0]?.url} alt=""/>
                                    </Link>
                                    <div className="flex justify-between p-2 text-base">
                                        <div className="">
                                            <h3 className="black-text font-semibold">{item?.name}</h3>
                                            <p className="text-gray-600">{item?.category?.name} {}</p>
                                        </div>
                                        <p className="black-text">${Number(item?.price).toFixed(0)}</p>
                                    </div>
                                    <button onClick={() => setOpenDetails(item?.id)} className="black-text border px-4 py-2 rounded-3xl hover:border-2 cursor-pointer border-gray-300 mt-4">
                                        Add to Bag
                                    </button>
                                </div>
                                <button onClick={() => deleteFromFavorites(item?.id)} className="absolute top-4 right-4 bg-white p-3 text-2xl cursor-pointer rounded-full">
                                    <FaHeart />
                                </button>
                            </div>
                        </div>
                        <DetailModal item={item} openDetails={openDetails === item?.id} setOpenDetails={() => setOpenDetails(null)} addedToBasket={addedToBasket} setAddedToBasket={setAddedToBasket} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Favorites
