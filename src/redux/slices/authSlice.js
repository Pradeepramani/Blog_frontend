import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosinstance from "../../Config/axiosinstance.js";

const initialState = {
    isloggedIn: localStorage.getItem("isloggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: JSON.parse(localStorage.getItem("data")) || {},
};



export const createAccount = createAsyncThunk("/api/user/signup", async (data, thunkAPI) => {
  try {
      const response = await axiosinstance.post("/api/user/signup", data);
      return response.data; // Only return data on success
  } catch (error) {
      const errorMessage = error?.response?.data?.message || "Account creation failed";
      return thunkAPI.rejectWithValue(errorMessage); // Return a clear error message
  }
});



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(createAccount.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(createAccount.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.isloggedIn = true;
    //             state.data = action.payload;
    //         })
    //         .addCase(createAccount.rejected, (state) => {
    //             state.loading = false;
    //         });
    // },
});

export default authSlice.reducer;
