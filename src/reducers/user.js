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

    // setSecret: (state, action) => {
    //   const { secretMessage } = action.payload;
    //   console.log(` Secret Message: ${secretMessage}`);
    //   state.login.secretMessage = secretMessage;
    // },

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

/// THUNKS

// const getVideos = () => {
//   const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";
//   fetch(VIDEO_COLLECTION_URL)
//     .then((res) => res.json())
//     .then((json) => setVideoCollection(json))
//     .catch((err) => console.log(err));
// };

// useEffect(getVideos, []);

//check APP add provider
//add setVideoCOllection globally
//check survey project

// Vanessa's THUNKS
// export const getSecretMessage = (userId, accessToken) => {
//   return (dispatch) => {
//     fetch(`https://project-auth-vane-axel.herokuapp.com/users/${userId}/secret`, {
//       method: 'GET',
//       headers: { Authorization: accessToken }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Could not get information, please make sure you are logged in.');
//         }
//         return res.json();
//       })
//       .then((json) => {
//         dispatch(user.actions.setSecretMessage({ secretMessage: json.secretMessage }));
//       })
//       .catch((error) => {
//         dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
//       });
//   };
// };

// export const login = (name, password) => {
//   return (dispatch) => {
//     fetch('https://project-auth-vane-axel.herokuapp.com/sessions', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, password })
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Unable to log in, please check your username and password.');
//         } else {
//           return res.json();
//         }
//       })
//       .then((json) => {
//         dispatch(user.actions.setUserId({ userId: json.userId }));
//         dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }));
//       })
//       .catch((error) => {
//         dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }));
//       });
//   };
// };

// export const logout = () => {
//   return (dispatch) => {
//     dispatch(user.actions.setUserId({ userId: 0 }));
//     dispatch(user.actions.setAccessToken({ accessToken: null }));
//     dispatch(user.actions.setErrorMessage({ errorMessage: null }));
//     dispatch(user.actions.setSecretMessage({ secretMessage: null }));
//     localStorage.removeItem('validToken');
//   };
// };
