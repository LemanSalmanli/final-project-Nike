import { useState } from "react"
import { useGetAllProductsQuery } from "../../store/nikeApi"
import { Loader2 } from "lucide-react"
import AddProduct from "../../components/admin/product/AddProduct"
import Modal from "../../components/ui/Modal"

const colorClasses = {
    Red: "bg-red-500 text-red-500 ",
    Blue: "bg-blue-500 text-blue-500 ",
    Green: "bg-green-500 text-green-500 ",
    Yellow: "bg-yellow-400 text-yellow-400 ",
    Orange: "bg-orange-500 text-orange-500 ",
    Purple: "bg-purple-500 text-purple-500 ",
    Pink: "bg-pink-400 text-pink-400 ",
    Brown: "bg-amber-800 text-amber-800 ",
    Black: "bg-black text-black",
    White: "bg-white border border-gray-300 text-white",
    Gray: "bg-gray-400 text-gray-400",
    Beige: "bg-yellow-100 text-yellow-100",
    Ivory: "bg-neutral-50 text-neutral-50",
    Teal: "bg-teal-500 text-teal-500",
    Turquoise: "bg-cyan-400 text-cyan-400",
    Lime: "bg-lime-400 text-lime-400",
    Olive: "bg-lime-700 text-lime-700",
    Maroon: "bg-red-800 text-red-800",
    Navy: "bg-blue-900 text-blue-900",
    Indigo: "bg-indigo-500 text-indigo-500",
    Gold: "bg-yellow-500 text-yellow-500",
    Silver: "bg-gray-300 text-gray-300",
    Bronze: "bg-orange-700 text-orange-700",
    Coral: "bg-rose-400 text-rose-400",
    Salmon: "bg-rose-300 text-rose-300",
    Mint: "bg-green-300 text-green-300",
    Lavender: "bg-purple-300 text-purple-300",
    Charcoal: "bg-gray-800 text-gray-800",
    Peach: "bg-orange-300 text-orange-300",
    Mustard: "bg-yellow-600 text-yellow-600",
    Sand: "bg-yellow-200 text-yellow-200",
    Sky: "bg-sky-400 text-sky-400",
    Plum: "bg-purple-800 text-purple-800",
    Emerald: "bg-emerald-500 text-emerald-500",
    Ruby: "bg-red-600 text-red-600",
    Sapphire: "bg-blue-600 text-blue-600"
}

function Product() {
  const [addOpen, setAddOpen] = useState(false)
  const { data: products, isLoading, isError } = useGetAllProductsQuery()

  const colors = Object.keys(colorClasses)

  
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-red-500">Error loading categories</p>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-5xl p-4">Products</h1>
            <button className='ml-20 cursor-pointer bg-black text-white p-3 rounded-full' onClick={() => setAddOpen(true)}>
                Add Products
            </button>
            <div className="flex gap-2 flex-wrap py-4">
                {colors.map((color, index) => (
                    <div
                        className="cursor-pointer flex flex-col gap-1 items-center"
                        key={index}
                    >
                    <input
                        id={`${color}-checkbox`}
                        type="checkbox"
                        value={color}
                        className={`${colorClasses[color]} w-7 h-7 rounded-full appearance-none cursor-pointer border border-gray-300 checked:ring-2 checked:ring-offset-1 checked:ring-black`}
                    />
                    <label
                        className="text-xs text-[#111111] font-normal"
                        htmlFor={`${color}-checkbox`}
                    >
                        {color}
                    </label>
                    </div>
                ))}
            </div>

            <Modal open={addOpen} setOpen={setAddOpen}>
                <AddProduct open={addOpen} setOpen={setAddOpen} />
            </Modal>
            

            <div className='mt-5'>
                <ul className="flex flex-wrap gap-3 items-start ">
                    {products?.map((item, index) => (
                        <li 
                            key={item.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src={item?.images[0].url} alt={item?.name} className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{item?.name}</h2>
                                        <p className="dark:text-gray-800 line-clamp-3">{item?.description}</p>
                                        <p className="dark:text-gray-800">Brand: {item?.brand.name}</p>
                                        <p className="dark:text-gray-800">Category: {item?.category.name}</p>
                                        <p className="dark:text-gray-800">Price: ${item?.price}</p>
                                        <p className="dark:text-gray-800">Colors: {item?.colors.join(', ')}</p>
                                        <p className="dark:text-gray-800">Stock: {item?.stock}</p>
                                        <p className="dark:text-gray-800">Slug: {item?.slug}</p>
                                        <p className="dark:text-gray-800">Sizes: {item?.sizes.join(', ')}</p> 
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Product