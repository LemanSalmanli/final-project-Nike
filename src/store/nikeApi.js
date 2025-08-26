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
            return headers
        }
    }),
    tagTypes: ['Category', 'Brand', 'Product', 'Image', 'Basket'],
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
        deleteCategory: builder.mutation({
            query: (id) => ({
                method: 'delete',
                url: `category/${id}`,
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
        getFilteredProducts: builder.query({
             query: (filters) => ({
                url: 'product/filter',
                params: filters,
            }),
            providesTags: ['Product'],
            keepUnusedDataFor: 0
        }),
        getProductByCategoryId: builder.query({
            query: (id) => ({
                url: `product/category/${id}`
            }),
            providesTags: ['Product']
        }),
        getProductById: builder.query({
             query: (id) => ({
                url: `product/${id}`
            }),
            providesTags: ['Product']
        }),
        addToBasket: builder.mutation({
            query: ({ id, color, size, quantity }) => ({
                url: `basket/${id}`,
                method: 'POST',
                body: { color, size, quantity },
            }),
            invalidatesTags: ['Basket'],
        }),
        deleteFromBasket: builder.mutation({
            query: (basketItemId) => ({
                url: `basket/${basketItemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Basket'],
        }),
        getBasketItems: builder.query({
            query: () => 'basket',
            providesTags: ['Basket']
        }),

    })
})

export const {
    useLoginMutation,
    useAddCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllCategoriesQuery,
    useAddBrandMutation,
    useGetAllBrandsQuery,
    useUploadImageMutation,
    useAddProductMutation,
    useGetAllProductsQuery,
    useGetFilteredProductsQuery,
    useGetProductByCategoryIdQuery,
    useGetProductByIdQuery,
    useAddToBasketMutation,
    useDeleteFromBasketMutation,
    useGetBasketItemsQuery
} = nikeApi