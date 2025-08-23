import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import AddCategory from '../../components/admin/category/AddCategory'
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../store/nikeApi'
import { Loader2 } from 'lucide-react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { CiTrash } from 'react-icons/ci'

function Category() {
  const [addOpen, setAddOpen] = useState(false)
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery()
  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDeleteCategory = (id) => {
    deleteCategory(id)
  }
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-20 w-full h-[100vh]">
          <Loader2 className="w-16 h-16 animate-spin" />
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
      <h1 className="text-5xl p-4 text-orange-600">Categories</h1>
      <button className='cursor-pointer bg-black text-white p-3 rounded-full hover:bg-[#707072]' onClick={() => setAddOpen(true)}>
          Add Category
      </button>
      <Modal open={addOpen} setOpen={setAddOpen}>
          <AddCategory open={addOpen} setOpen={setAddOpen} />
      </Modal>

      <div className='mt-5'>
          <ul>
              {categories?.map((item, index) => (
                <li
                  key={item?.id}
                  className="flex items-start justify-between p-4 hover:bg-orange-50 "
                >
                  <div className="w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium text-lg  transition-colors duration-200">
                          {item?.name || 'No name'}
                        </span>
                        <div className='flex items-center gap-2'>
                          <button className="text-blue-500 hover:text-blue-600 cursor-pointer text-2xl py-1 flex items-center justify-center rounded-full"><MdOutlineModeEdit /></button>
                          <button onClick={() => handleDeleteCategory(item?.id)} className="text-red-500 hover:text-red-600  cursor-pointer text-2xl  py-1 flex items-center justify-center rounded-full"><CiTrash /></button> 
                        </div>
                    </div>
                    {item?.children && (
                      <ul className="ml-14 mt-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={child.id} className="pl-4 border-l-2 border-gray-200 ">
                            <div className='flex items-start justify-between  border-b py-1'>
                              <div className="flex items-center gap-2 w-full">
                                <span>{childIndex + 1}.</span>
                                <span>{child?.name || 'No name'}</span>
                              </div>
                              <div className='flex items-center gap-2'>
                                <button className="bg-blue-500 hover:bg-blue-600  text-white cursor-pointer text-xl p-1 flex items-center justify-center rounded-lg"><MdOutlineModeEdit /></button>
                                <button onClick={() => handleDeleteCategory(child?.id)} className="bg-red-500 hover:bg-red-600 text-white   cursor-pointer text-xl  p-1 flex items-center justify-center rounded-lg"><CiTrash /></button> 
                              </div>
                            </div>
                              {child?.children && (
                                <ul className="ml-6 mt-1 space-y-1">
                                  {child.children.map((subChild, subChildIndex) => (
                                    <li key={subChild.id} className="flex items-center justify-between gap-2 text-sm text-gray-600 border-b">
                                      <div>
                                        <span>{subChildIndex + 1}.</span>
                                        <span>{subChild?.name || 'No name'}</span>
                                      </div>
                                      <div className='flex items-center gap-2'>
                                        <button className="text-blue-500 hover:text-blue-600 cursor-pointer text-lg py-1 flex items-center justify-center rounded-full"><MdOutlineModeEdit /></button>
                                        <button onClick={() => handleDeleteCategory(subChild?.id)} className="text-red-500 hover:text-red-600  cursor-pointer text-lg  py-1 flex items-center justify-center rounded-full"><CiTrash /></button> 
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>  
                </li>
              ))}
          </ul>
      </div>
    </div>
  )
}

export default Category
