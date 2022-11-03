import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import wishlistReducer from '../Slices/wishlistSlice'
import cartReducer from '../Slices/cartSlice'

export default configureStore({
    reducer: {
        userReducer,
        wishlistReducer,
        cartReducer
    }
})