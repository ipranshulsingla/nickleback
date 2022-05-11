import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  token: null,
  profile: {
    fullName: "",
    email: "",
    mobileNumber: "",
    walletAddress: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isAuthenticated = true;
      state.profile = action.payload.profile;
      state.token = action.payload.token;
    },

    LOGOUT: (state) => {
      state = initialState;
    },

    UPDATE_PROFILE: (state, action) => {
      state.profile = { ...state.profile, ...action.payload.updatedProfile };
    },
  },
});

export default authSlice.reducer;

export const { LOGIN, LOGOUT, UPDATE_PROFILE } = authSlice.actions;
