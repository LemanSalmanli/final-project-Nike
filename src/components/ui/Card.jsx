import { useEffect, useState } from "react"
import { Link } from "react-router"

function Card({item}) {
    const [currentImg, setCurrentImg] = useState(item?.images[0].url)

    useEffect(() => {
        setCurrentImg(item?.images?.[0]?.url)
    }, [item])
  return (
        <Link to={`/details/${item.id}`} className="flex flex-col gap-2 group pb-12">
            <div className="aspect-square overflow-hidden">
                <img className="w-full h-full object-cover object-top" src={currentImg} alt=""/>
            </div>
            <div className=" lg:group-hover:hidden text-[14px] font-[500] px-4">
                <h3 className="text-[#111111]">{item?.name}</h3>
                <p className="text-gray-600">{item?.category.name} {}</p>
                <p className="text-gray-600">{item?.colors.length} Colors</p>
            </div>
            <div className="px-4">
                <div className="gap-2 bg-white z-10 hidden lg:group-hover:flex">
                    {item?.images?.map((img, idx) => 
                        <img onMouseOver={() => setCurrentImg(img?.url)} className="h-10 w-10 object-cover object-top" src={img?.url} key={idx} alt="" />
                    )}
                </div>
                <div>
                    <p className="text-[#111111]">$ {item?.price}</p>
                </div>
            </div>
        </Link>
  )
}

export default Card
