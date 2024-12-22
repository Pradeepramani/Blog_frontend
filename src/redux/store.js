import { configureStore } from "@reduxjs/toolkit";
import authreducer from './slices/authSlice.js'
const store=configureStore({reducer:{
    auth:authreducer
},devTools:true})

export default store