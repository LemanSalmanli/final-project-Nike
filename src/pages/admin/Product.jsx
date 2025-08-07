import { useState } from "react"
import { useGetAllProductsQuery } from "../../store/nikeApi"
import { Loader2 } from "lucide-react"
import AddProduct from "../../components/admin/product/AddProduct"
import Modal from "../../components/ui/Modal"

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
      <h1>Products</h1>
      <button
        className='cursor-pointer bg-black text-white '
        onClick={() => setAddOpen(true)}
        >Add Products</button>

        <Modal open={addOpen} setOpen={setAddOpen}>
          <AddProduct open={addOpen} setOpen={setAddOpen} />
        </Modal>
        

      <div className='mt-5'>
          <ul>
              {products?.map((item, index) => (
                
                  <li onClick={() => console.log(item)}
                      key={item.id}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group"
                  >
                      <div>
                          <div>
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