import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slices/CartSlice'
import ProductSlice from "./Slices/ProductSlice"
import WishlistSlice  from './Slices/Wishlistslice'

export const store =configureStore({
    reducer:{
        products:ProductSlice ,
        cart:CartSlice,
        wishlist:WishlistSlice,
    },
})