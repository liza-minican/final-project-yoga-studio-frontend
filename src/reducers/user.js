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

    addFavoriteVideos: (state, action) => {
      const videoExists = state.userActions.favoriteVideos.find(
        (video) => video._id === action.payload._id
      );
      if (!videoExists) {
        const newArray = state.userActions.favoriteVideos.slice();
        newArray.push({ ...action.payload });
        state.userActions.favoriteVideos = newArray;
      } else {
        videoExists.quantity += 0;
      }
    },
    // setFavoriteVideos: (state, action) => {
    //   console.log(action.payload);
    //   state.userActions.favoriteVideos = action.payload;
    //   const videoExists = state.userActions.favoriteVideos.some(
    //     (el) => el._id === action.payload._id
    //   );
    //   if (!videoExists) {
    //     state.userActions.favoriteVideos.push(action.payload);
    //   }
    // },
    removeFavoriteVideos: (state, action) => {
      const videoExists = state.userActions.favoriteVideos.find(
        (video) => video._id === action.payload._id
      );
      if (videoExists && videoExists.quantity === 1) {
        state.userActions.favoriteVideos = state.userActions.favoriteVideos.filter(
          (video) => video._id !== action.payload._id
        );
      } else if (videoExists) {
        videoExists.quantity -= 1;
      }
    },

    setFavoriteVideos: (state, action) => {
      state.userActions.favoriteVideos = action.payload;
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


// export const getFavoriteVideos = (userId, accessToken) => {
//   return (dispatch) => {
//   fetch(`http://localhost:8080/users/${userId}/favorites`, {
//     method: "GET",
//     headers: { Authorization: accessToken },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error("Could not get Videos");
//     })
//     .then((json) => {
//       dispatch(user.actions.setFavoriteVideos(json));
//     });
// };
// }

//useEffect(getFavoriteVideos, []);

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