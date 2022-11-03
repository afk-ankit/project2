import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import wishlistReducer from '../Slices/wishlistSlice'

export default configureStore({
    reducer: {
        userReducer,
        wishlistReducer
    }
})