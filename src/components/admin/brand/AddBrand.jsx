import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Loader2 } from 'lucide-react'
import * as Yup from 'yup'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAddBrandMutation } from '../../../store/nikeApi'

const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
    slug: Yup.string().min(2, 'Too short').max(50, 'Too long').required('Required'),
})

function AddBrand({open, setOpen}) {
    const [addBrand, { isLoading }] = useAddBrandMutation()
    const [formKey, setFormKey] = useState(Date.now())
    
    useEffect(() => {
        if (open) {
        setFormKey(Date.now())
        }
    }, [open])

    const handleSaveBrand = async (values, { resetForm }) => {
        try {
           const payload = {
            ...values,
        }
        await addBrand(payload).unwrap()
            toast.success('Brand successfully added')
            resetForm()
            setOpen(false)
        } catch (error) {
            toast.error(error?.data?.message)
        }
    }
    return (
        <div>
            <h1>Add Brand</h1>
            <Formik
            key={formKey}
                initialValues={{
                    name: '',
                    slug: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSaveBrand}
            >
            {() => (
                <Form className="flex flex-col gap-4">
                <div>
                    <label className='text-blue-700'>Name</label>
                    <Field 
                        name="name"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add category name..."
                    />
                    <ErrorMessage name='name' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                    <label className='text-blue-700'>Slug</label>
                    <Field 
                        name="slug"
                        type="text"
                        className="w-full text-black"
                        placeholder="Add category slug..."
                    />
                    <ErrorMessage name='slug' component="div" className="text-red-500 text-sm mt-1" />
                </div>
                
                
                <div className='w-full flex justify-end'>
                    <button
                        type="submit"
                        className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                    </button>
                </div>
                </Form>
            )}
            </Formik>
            
        </div>
    )
}

export default AddBrand
