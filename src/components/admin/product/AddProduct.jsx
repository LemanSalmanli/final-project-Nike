import { useEffect, useState } from "react"
import { useAddProductMutation, useUploadImageMutation } from "../../../store/nikeApi"
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from "formik"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"

const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short').max(100, 'Too long').required('Required'),
    description: Yup.string().min(2, 'Too short').max(300, 'Too long').required('Required'),
    price: Yup.number().required('Required'),
    stock: Yup.number().required('Required'),
    brandId: Yup.number().required('Required'),
    categoryId: Yup.number().required('Required'),
    slug: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
    colors: Yup.string().test('is-valid-colors', 'Enter at least one color (comma separated)',
      (value) => value && value.trim().length > 0
    ),
    
    sizes: Yup.string()
        .test(
            'is-valid-sizes',
            'Enter at least one size (comma separated)',
            (value) => value && value.trim().length > 0
    ),
    
})

function AddProduct({open, setOpen}) {
    const [addProduct, { isLoading }] = useAddProductMutation()
    const [uploadImage] = useUploadImageMutation()
    const [formKey, setFormKey] = useState(Date.now())
    const [imageFiles, setImageFiles] = useState([])
    const [isUploading, setIsUploading] = useState(false)

    
    useEffect(() => {
        if (open) {
        setFormKey(Date.now())
        setImageFiles([])
        }
    }, [open])

    const handleImageChange = (e) => {
        setImageFiles(Array.from(e.target.files))
    }

   const handleSaveProduct = async (values, { resetForm }) => {
    console.log('Submitting form with values:', values)
    console.log('Selected image files:', imageFiles)

        if (imageFiles.length === 0) {
            toast.error('At least one image is required')
            return
        }

        try {
            setIsUploading(true)
            const imageIds = []

            for (const file of imageFiles) {
                const formData = new FormData()
                formData.append("image", file)
                const result = await uploadImage(formData).unwrap()
                if (result?.id) {
                    imageIds.push(result.id)
                }
            }

            const payload = {
                name: values.name, 
                description: values.description,
                slug: values.slug,
                price: Number(values.price),
                stock: Number(values.stock),
                brandId: Number(values.brandId),
                categoryId: Number(values.categoryId),
                images: imageIds,
                colors: values.colors ? values.colors.split(',').map(c => c.trim()) : [],
                sizes: values.sizes ? values.sizes.split(',').map(s => s.trim()) : [],
            }

            await addProduct(payload).unwrap()
            toast.success('Product successfully added')
            resetForm()
            setOpen(false)
            setImageFiles([])
        } catch (error) {
            toast.error(error?.data?.message || 'An error occurred')
        } finally {
            setIsUploading(false)
        }
    }

    
  return (
     <div>
            <h1>Add Product</h1>
            <Formik
                key={formKey}
                    initialValues={{
                        name: '',
                        description: '',
                        price: '',
                        stock: '',
                        brandId: '',
                        colors: '',
                        sizes: '',
                        categoryId: '',
                        slug: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSaveProduct}
            >
            {({handleSubmit}) => (
                <Form className="flex flex-col gap-4">
                <div>
                    <label className='text-blue-700'>Name</label>
                    <Field 
                        name="name"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add Product name..."
                    />
                    <ErrorMessage name='name' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Description</label>
                    <Field 
                        name="description"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add product description..."
                    />
                    <ErrorMessage name='description' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Price</label>
                    <Field 
                        name="price"
                        type="number"
                        className="w-full text-black"
                        placeholder="Add Product price..."
                    />
                    <ErrorMessage name='price' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Stock</label>
                    <Field 
                        name="stock"
                        type="number"
                        className="w-full text-black"
                        placeholder="Add product stock..."
                    />
                    <ErrorMessage name='stock' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Brand Id</label>
                    <Field 
                        name="brandId"
                        type="number"
                        className="w-full text-black"
                        placeholder="Add Product brand Id..."
                    />
                    <ErrorMessage name='brandId' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Category Id</label>
                    <Field
                        name="categoryId"
                        type="number"
                        className="w-full text-black"
                        placeholder="Add product category ID..."
                    />
                    <ErrorMessage name='categoryId' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Colors</label>
                    <Field 
                        name="colors"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add product colors..."
                    />
                    <ErrorMessage name='colors' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Sizes</label>
                    <Field 
                        name="sizes"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add product sizes..."
                    />
                    <ErrorMessage name='sizes' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Images</label>
                    <input 
                        type="file" 
                        multiple 
                        onChange={handleImageChange}
                        accept="image/*"
                        className="w-full text-black"
                    />
                        {imageFiles.length > 0 && (
                            <div className="mt-2">
                                <p>Selected files: {imageFiles.length}</p>
                            </div>
                        )}
                    
                </div>
                <div>
                    <label className='text-blue-700'>Slug</label>
                    <Field
                        name="slug"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add product slug..."
                    />
                    <ErrorMessage name='slug' component="div" className="text-red-500 text-sm mt-1" />
                </div>

                
                
                <div className='w-full flex justify-end'>
                    <button
                        type="submit"
                        className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'
                        disabled={isLoading || isUploading}
                    >
                        {(isLoading || isUploading) ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                    </button>
                </div>
                </Form>
            )}
            </Formik>
            
        </div>
  )
}

export default AddProduct
