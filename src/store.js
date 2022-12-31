import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./utils/loginSlice";

export default configureStore({
  reducer: {
    login: loginSlice,
  },
});
