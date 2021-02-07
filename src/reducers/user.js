import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: localStorage.validToken || null,
    userId: localStorage.userId || 0,
    userName: localStorage.userName || "",
    email: localStorage.email || "",
    loggedIn: localStorage.loggedIn || false,
  },
  userActions: {
    favoriteVideos: [],
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
      localStorage.setItem("validToken", accessToken);
    },

    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
      localStorage.setItem("userId", userId);
    },
    setUserName: (state, action) => {
      const { userName } = action.payload;
      console.log(`Name: ${userName}`);
      state.login.name = userName;
      localStorage.setItem("userName", userName);
    },
    setFavoriteVideos: (store, action) => {
      store.userActions.favoriteVideos = action.payload;
    },

    toggleLoggedState: (state, action) => {
      state.login.loggedIn = action.payload;
    },

    logout: (state, action) => {
      console.log("Logging out");
      state.login.userId = 0;
      state.login.email = "";
      state.login.userName = "";
      state.login.accessToken = null;
      localStorage.clear();
    },
  },
});

//check APP add provider
//add setVideoCOllection globally
//check survey project

// export const logout = () => {
//   return (dispatch) => {
//     dispatch(user.actions.setUserId({ userId: 0 }));
//     dispatch(user.actions.setAccessToken({ accessToken: null }));
//     dispatch(user.actions.setErrorMessage({ errorMessage: null }));
//     dispatch(user.actions.setSecretMessage({ secretMessage: null }));
//     localStorage.removeItem('validToken');
//   };
// };
