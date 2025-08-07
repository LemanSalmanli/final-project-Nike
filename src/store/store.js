import { configureStore } from "@reduxjs/toolkit";
import { nikeApi } from "./nikeApi";

export const store = configureStore({
    reducer: {
        [nikeApi.reducerPath]: nikeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nikeApi.middleware),
})