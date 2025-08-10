import { useState } from "react"

function Card({item}) {
    const [currentImg, setCurrentImg] = useState(item?.images[0].url)
  return (
    <div>
        <div className="flex flex-col gap-2 group">
            <div className="">
                <img className="h-full object-fill aspect-square " src={currentImg} alt="" />
            </div>
            <div className=" lg:group-hover:hidden">
                <h3>{item?.name}</h3>
                <p>{item?.category.name} {}</p>
                <p>{item?.colors.length} Colors</p>
            </div>
            <div>
                <div className="gap-2 bg-white z-10 hidden lg:group-hover:flex">
                    {item?.images?.map((img, idx) => 
                        <img onClick={() => setCurrentImg(img?.url)} className="h-10 w-10" src={img?.url} key={idx} alt="" />
                    )}
                </div>
                <div>
                    <p>$ {item?.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
