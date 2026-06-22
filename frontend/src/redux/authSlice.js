import { createSlice } from "@reduxjs/toolkit";

// check localStorage on refresh
const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("token");

const initialState = {
  user: userFromStorage
    ? JSON.parse(userFromStorage)
    : null,

  token: tokenFromStorage || null,

  isAuthenticated: !!tokenFromStorage,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // LOGIN SUCCESS
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // save in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.user)
      );

      localStorage.setItem(
        "token",
        action.payload.token
      );
    },

    // LOGOUT
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;

      // remove localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } =
  authSlice.actions;

export default authSlice.reducer;