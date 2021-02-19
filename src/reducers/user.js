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

export const getFavoriteVideos = (userId, accessToken) => {
  return (dispatch) => {
    fetch(`https://yoga-studio-liza.herokuapp.com/users/${userId}/favorites`, {
      method: "GET",
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Could not get Videos");
      })
      .then((json) => {
        dispatch(user.actions.setFavoriteVideos(json));
      });
  };
};
// add fav video
export const addFavoriteVideos = (userId, accessToken, id) => {
  return (dispatch) => {
    fetch(
      `https://yoga-studio-liza.herokuapp.com/users/${userId}/favorites/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ _id: id }),
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Could not add videoto favorites. User must be logged in."
        );
      })
      .then(() => {
        dispatch(getFavoriteVideos(userId, accessToken));
      });
  };
};
// remove fav video
export const removeFavoriteVideos = (userId, accessToken, id) => {
  return (dispatch) => {
    fetch(
      `https://yoga-studio-liza.herokuapp.com/users/${userId}/favorites/${id}`,
      {
        method: "DELETE",
        body: JSON.stringify({ _id: id }),
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Could not remove video from favorites. User must be logged in."
        );
      })
      .then(() => {
        dispatch(getFavoriteVideos(userId, accessToken));
      });
  };
};
