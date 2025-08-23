// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const token = localStorage.getItem('token')

// export const adminApi = createApi({
//     reducerPath: 'adminApi',
//      baseQuery: fetchBaseQuery({ 
//         baseUrl: 'http://localhost:3000/api/',
//         prepareHeaders: (headers) => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 headers.set('authorization', `Bearer ${token}`);
//             }
//             return headers
//         }
//     }),
//     tagTypes: ['Category', 'Brand', 'Product', 'Image'],
//     endpoints: (builder) => ({
//         login: builder.mutation({
//             query: ({ email, password }) => ({
//                 method: 'post',
//                 url: 'auth/signin',
//                 body: { email: email, password: password }
//             })
//         }),
//         getAllCategories: builder.query({
//             query: () => 'category',
//             providesTags: ['Category']
//         }),
//         addCategory: builder.mutation({
//             query: ({name, slug, parentId}) => ({
//                 method: 'post',
//                 url: 'category',
//                 body: { name, slug, parentId }
//             }),
//             invalidatesTags: ['Category']
//         }),
//         deleteCategory: builder.mutation({
//             query: (id) => ({
//                 method: 'delete',
//                 url: `category/${id}`,
//             }),
//             invalidatesTags: ['Category']
//         }),
//         getAllBrands: builder.query({
//             query: () => 'brand',
//             providesTags: ['Brand']
//         }),
//         addBrand: builder.mutation({
//             query: ({name, slug}) => ({
//                 method: 'post',
//                 url: 'brand',
//                 body: { name, slug }
//             }),
//             invalidatesTags: ['Brand']
//         }),
//         deleteBrand: builder.mutation({
//             query: (id) => ({
//                 method: 'delete',
//                 url: `brand/${id}`,
//             }),
//             invalidatesTags: ['Brand']
//         }),
//         uploadImage: builder.mutation({
//             query: (formData) => ({
//                 url: 'upload/image',
//                 method: 'POST',
//                 body: formData, 
//             }),
//             invalidatesTags: ['Image']
//         }),
//         addProduct: builder.mutation({
//             query: (productData) => ({
//                 method: 'post',
//                 url: 'product',
//                 body: productData,
//             }),
//             invalidatesTags: ['Product']
//         }),
//         getAllProducts: builder.query({
//             query: () => 'product/all',
//             providesTags: ['Product']
//         }),
//         getProductById: builder.query({
//              query: (id) => ({
//                 url: `product/${id}`
//             }),
//             providesTags: ['Product']
//         }),
//     })
// })

// export const {
//     useLoginMutation,
//     useGetAllCategoriesQuery,
//     useAddCategoryMutation,
//     useDeleteCategoryMutation,
//     useGetAllBrandsQuery,
//     useAddBrandMutation,
//     useDeleteBrandMutation,
//     useUploadImageMutation,
//     useAddProductMutation,
//     useGetAllProductsQuery,
//     useGetProductByIdQuery,
// } = adminApi