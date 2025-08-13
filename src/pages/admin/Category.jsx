import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import AddCategory from '../../components/admin/category/AddCategory'
import { useGetAllCategoriesQuery } from '../../store/nikeApi'
import { Loader2 } from 'lucide-react'

function Category() {
  const [addOpen, setAddOpen] = useState(false)
  const { data: categories, isLoading, isError } = useGetAllCategoriesQuery()

  console.log(categories);
  
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
    console.log(categories)

  return (
    <div>
      <h1 className="text-5xl p-4">Categories</h1>
      <button className='cursor-pointer bg-black text-white p-3 rounded-full' onClick={() => setAddOpen(true)}>
          Add Category
      </button>
      <Modal open={addOpen} setOpen={setAddOpen}>
          <AddCategory open={addOpen} setOpen={setAddOpen} />
      </Modal>

      <div className='mt-5'>
          <ul>
              {categories?.map((item, index) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-100  flex items-center justify-center font-bold text-lg">
                          {index + 1}
                        </div>
                        <span className="text-gray-800 font-medium text-lg  transition-colors duration-200">
                          {item?.name || 'No name'}
                        </span>
                    </div>
                    {item?.children && (
                      <ul className="ml-14 mt-2 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <li key={child.id} className="pl-4 border-l-2 border-gray-200">
                            <div className="flex items-center gap-2">
                              <span>{childIndex + 1}.</span>
                              <span>{child?.name || 'No name'}</span>
                            </div>
                            {child?.children && (
                              <ul className="ml-6 mt-1 space-y-1">
                                {child.children.map((subChild, subChildIndex) => (
                                  <li key={subChild.id} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span>{subChildIndex + 1}.</span>
                                    <span>{subChild?.name || 'No name'}</span>
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
