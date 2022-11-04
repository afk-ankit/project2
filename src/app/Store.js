import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import wishlistReducer from '../Slices/wishlistSlice'
import cartReducer from '../Slices/cartSlice'
import loaderReducer from '../Slices/loaderSlice'
export default configureStore({
    reducer: {
        userReducer,
        wishlistReducer,
        cartReducer,
        loaderReducer
    }
})