import { useState } from "react"
import { useGetAllBrandsQuery } from "../../store/nikeApi"
import { Loader2 } from "lucide-react"
import AddBrand from "../../components/admin/brand/AddBrand"
import Modal from "../../components/ui/Modal"


function Brand() {
  const [addOpen, setAddOpen] = useState(false)
  const { data: brands, isLoading, isError } = useGetAllBrandsQuery()

  
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
        <h1 className="text-5xl p-4">Brands</h1>
        <button className='cursor-pointer bg-black text-white p-3 rounded-full' onClick={() => setAddOpen(true)}>
            Add Brands
        </button>

      <Modal open={addOpen} setOpen={setAddOpen}>
          <AddBrand open={addOpen} setOpen={setAddOpen} />
      </Modal>

      <div className='mt-5'>
          <ul>
              {brands?.map((item, index) => (
                  <li
                      key={item.id}
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group"
                  >
                      <div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100  flex items-center justify-center font-bold text-lg">
                                {index + 1}
                            </div>
                            <span className="text-gray-800 font-medium text-lg transition-colors duration-200">
                                {item?.name || 'No name'}
                            </span>
                        </div>
                        
                      </div>
                      
                  </li>
              ))}
          </ul>
      </div>
    </div>
  )
}

export default Brand
