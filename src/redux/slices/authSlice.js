import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosinstance from "../../Config/axiosinstance.js"

const initialState = {
    isloggedIn:localStorage.getItem("isloggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") || {}
  }

  export const createAccount=
createAsyncThunk("/api/user/signup", async(data)=>{

  try{

    const response= axiosinstance.post("/api/user/siginup",data);
    toast.promise(response,
      {
        loading:"Wait creating account",
        success:(data)=>{return data?.data?.message},
        error:"failed to create account"
      }
    )
  }
  catch(error)
  {
    toast.error(error?.responde?.data?.message);
  }
})

  const authSlice=createSlice(
    {
        name:"auth",
        initialState,
        reducers:{}
    }
  )

  export default authSlice.reducer;