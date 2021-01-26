import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: "",
    email: "",
    secretMessage: "",
    loggedIn: false,
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      console.log(`Name: ${name}`);
      state.login.name = name;
    },

    setSecret: (state, action) => {
      const { secretMessage } = action.payload;
      console.log(` Secret Message: ${secretMessage}`);
      state.login.secretMessage = secretMessage;
    },

    logout: (state, action) => {
      console.log("Logging out");
      state.login.userId = 0;
      state.login.email = "";
      state.login.name = "";
      state.login.accessToken = null;
      state.login.secretMessage = "";
    },
  },
});
