import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "../pages/user/Home";
import Retail from "../pages/user/Retail";
import Login from "../pages/admin/Login";
import AdminLayout from "../layouts/AdminLayout";
import Category from "../pages/admin/Category";
import Brand from "../pages/admin/Brand";
import Product from "../pages/admin/Product";
import Auth from "./Auth";
import UserLayout from "../layouts/UserLayout";
import Men from "../pages/user/Men";
import Women from "../pages/user/Women";
import Kids from "../pages/user/Kids";
import Products from "../pages/user/Products";
import Details from "../pages/user/Details";
import Basket from "../pages/user/Basket";
import Favorites from "../pages/user/Favorites";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="retail" element={<Retail />} />
                <Route path="men" element={<Men />} />
                <Route path="women" element={<Women />} />
                <Route path="kids" element={<Kids />} />
                <Route path="products" element={<Products />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="/favorites" element={<Favorites />} />
            </Route>
            
            <Route path="/login" element={<Login />} />
            
            <Route path="/admin" element={
                <Auth>
                    <AdminLayout />
                </Auth>
            }>
                <Route path="category"  element={<Category />} />
                <Route path="brand" element={<Brand />} />
                <Route path="product" element={<Product />} />
            </Route>

        </>
    )
)