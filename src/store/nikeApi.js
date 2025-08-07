import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = localStorage.getItem('token')

export const nikeApi = createApi({
    reducerPath: 'nikeApi',
     baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3000/api/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['Category', 'Brand', 'Product', 'Image'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                method: 'post',
                url: 'auth/signin',
                body: { email: email, password: password }
            })
        }),
        addCategory: builder.mutation({
            query: ({name, slug, parentId}) => ({
                method: 'post',
                url: 'category',
                body: { name, slug, parentId }
            }),
            invalidatesTags: ['Category']

        }),
        getAllCategories: builder.query({
            query: () => 'category',
            providesTags: ['Category']
        }),
        addBrand: builder.mutation({
            query: ({name, slug}) => ({
                method: 'post',
                url: 'brand',
                body: { name, slug }
            }),
            invalidatesTags: ['Brand']

        }),
        getAllBrands: builder.query({
            query: () => 'brand',
            providesTags: ['Brand']
        }),
        uploadImage: builder.mutation({
            query: (formData) => ({
                url: 'upload/image',
                method: 'POST',
                body: formData, 
            }),
            invalidatesTags: ['Image']
        }),
        addProduct: builder.mutation({
            query: (productData) => ({
                method: 'post',
                url: 'product',
                body: productData,
            }),
            invalidatesTags: ['Product']

        }),
        getAllProducts: builder.query({
            query: () => 'product/all',
            providesTags: ['Product']
        }),
    })
})

export const {
    useLoginMutation,
    useAddCategoryMutation,
    useGetAllCategoriesQuery,
    useAddBrandMutation,
    useGetAllBrandsQuery,
    useUploadImageMutation,
    useAddProductMutation,
    useGetAllProductsQuery,
} = nikeApi