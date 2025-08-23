import { useState } from "react"
import { useGetAllProductsQuery } from "../../store/nikeApi"
import { Loader2 } from "lucide-react"
import AddProduct from "../../components/admin/product/AddProduct"
import Modal from "../../components/ui/Modal"
import { MdOutlineModeEdit } from "react-icons/md"
import { CiTrash } from "react-icons/ci"

function Product() {
    const [addOpen, setAddOpen] = useState(false)
    const { data: products, isLoading, isError } = useGetAllProductsQuery()
  
  
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
            <h1 className="text-5xl p-4 text-orange-500">Products</h1>
            <button className='cursor-pointer bg-black hover:bg-[#707072] text-white p-3 rounded-full' onClick={() => setAddOpen(true)}>
                Add Products
            </button>
    
            <Modal open={addOpen} setOpen={setAddOpen}>
                <AddProduct open={addOpen} setOpen={setAddOpen} />
            </Modal>
            
                <div className="mt-5">
                    <div>
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="text-sm">
                                    <th title="Id" className="pr-4">Id</th>
                                    <th title="Image" className="">Image</th>
                                    <th title="Name" className="">Name</th>
                                    <th title="Description" className="">Description</th>
                                    <th title="Brand" className="">Brand</th>
                                    <th title="Category" className="">Category</th>
                                    <th title="Price" className="">Price</th>
                                    <th title="Colors" className="">Colors</th>
                                    <th title="Sizes" className="">Sizes</th>
                                    <th title="Stock" className="">Stock</th>
                                    <th title="Slug" className="">Slug</th>
                                    <th title="Edit/Delete" className="">Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products?.map((item) => (
                                    <tr key={item?.id} className="border-b">
                                        <td className="pr-4">
                                            <span>{item?.id}</span>
                                        </td>
                                        <td>
                                            <img className="h-14 w-14 object-cover" src={item?.images[0]?.url} alt="" />
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.name}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.description?.slice(0, 30)}...</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.brand?.name}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.category?.name}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>${item?.price}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.colors.join(', ')}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.sizes.join(', ')}</span>
                                        </td>
                                        <td className="px-3">
                                            <span>{item?.stock}</span>
                                        </td>
                                        <td className="px-3 py-4">
                                            <span>{item?.slug}</span>
                                        </td>
                                        <td className="px-3 py-2 flex flex-col gap-4">
                                            <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-2xl text-white py-1 flex items-center justify-center rounded-full"><MdOutlineModeEdit /></button>
                                            <button className="bg-red-500 hover:bg-red-600  cursor-pointer text-2xl text-white py-1 flex items-center justify-center rounded-full"><CiTrash /></button> 
                                        </td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default Product