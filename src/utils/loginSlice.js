import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userInfo: null,
  userIsLogin: true,
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {},
  },
});

export const { useIsLogin } = loginSlice.actions;

export default loginSlice.reducer;
