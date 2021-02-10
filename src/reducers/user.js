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
  initialState,
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
      state.login.userName = userName;
      localStorage.setItem("userName", userName);
    },
    setEmail: (state, action) => {
      const { email } = action.payload;
      console.log(`Email: ${email}`);
      state.login.email = email;
      localStorage.setItem("email", email);
    },

    setFavoriteVideos: (state, action) => {
      console.log(action.payload);
      state.userActions.favoriteVideos = action.payload;
      //       const updateArray = () =>
      // {    if(favoriteVideos.some((el) => el._id !== id)){
      //   favoriteVideos.push(el)
      // };
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

// export const logout = () => {
//   return (dispatch) => {
//fetch("http://localhost:8080/users/logout", {
//       method: 'POST',
//       headers: { Authorization: accessToken }
//     })
//  .then((res) => {
//         if (res.ok) {
//           return res.json()
//         }
//         throw new Error('Failed to log out')
//       })
//          .catch((err) => console.log(err));
//       })
//     dispatch(user.actions.setUserId({ userId: 0 }));
//     dispatch(user.actions.setAccessToken({ accessToken: null }));
//     dispatch(user.actions.setUserName({ userName: '' }))
//     dispatch(user.actions.setEmail({ email: '' }))
//     localStorage.clear();

//   };
// };
