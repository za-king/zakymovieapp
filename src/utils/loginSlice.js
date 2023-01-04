import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userInfo: null,
  userIsLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {
      const result = { ...state, userInfo: action.payload, userIsLogin: true };
      localStorage.setItem("user" , JSON.stringify(result));
      // console.log(result)
      return result
    },

    userLogout(state,action){
      const result = {...state , userInfo : null , userIsLogin : false}
      localStorage.setItem("user" , JSON.stringify(result));
      // console.log(result)
      return result
    },
     loaduser(state,action){
      const result =  JSON.parse( localStorage.getItem("user"))
      return {...state ,result}

    }
  },
});

export const { userLogin ,userLogout ,loaduser} = loginSlice.actions;

export default loginSlice.reducer;
