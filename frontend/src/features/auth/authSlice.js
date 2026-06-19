import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  registerAPI,
  loginAPI
} from "./authAPI";


// get user from localStorage
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;



// REGISTER THUNK
export const registerUser = createAsyncThunk(

  "auth/register",

  async (userData, thunkAPI) => {

    try {

      return await registerAPI(userData);

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response.data.message
      );

    }

  }

);


// LOGIN THUNK
export const loginUser = createAsyncThunk(

  "auth/login",

  async (userData, thunkAPI) => {

    try {

      return await loginAPI(userData);

    } catch (error) {

      return thunkAPI.rejectWithValue(
        error.response.data.message
      );

    }

  }

);



// initial state
const initialState = {

  userInfo: userInfo,

  loading: false,

  error: null

};



// slice
const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {

    logout: (state) => {

      state.userInfo = null;

      localStorage.removeItem("userInfo");

    }

  },



  extraReducers: (builder) => {

    builder


      // REGISTER

      .addCase(registerUser.pending, (state) => {

        state.loading = true;

      })


      .addCase(registerUser.fulfilled, (state, action) => {

        state.loading = false;

        state.userInfo = action.payload;

        localStorage.setItem(
          "userInfo",
          JSON.stringify(action.payload)
        );

      })


      .addCase(registerUser.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      })



      // LOGIN

      .addCase(loginUser.pending, (state) => {

        state.loading = true;

      })


      .addCase(loginUser.fulfilled, (state, action) => {

        state.loading = false;

        state.userInfo = action.payload;

        localStorage.setItem(
          "userInfo",
          JSON.stringify(action.payload)
        );

      })


      .addCase(loginUser.rejected, (state, action) => {

        state.loading = false;

        state.error = action.payload;

      });

  }

});



export const { logout } = authSlice.actions;

export default authSlice.reducer;