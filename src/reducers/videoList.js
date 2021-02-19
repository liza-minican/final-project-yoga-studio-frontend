import { createSlice } from "@reduxjs/toolkit";

export const videoList = createSlice({
  name: "videoList",
  initialState: {
    videos: JSON.parse(localStorage.getItem("videos")) || [],
    errorMessage: "",
    filters: {
      category: null,
      length: null,
    },
  },
  reducers: {
    setVideosList: (state, action) => {
      const { videos } = action.payload;
      console.log(`Videos from redux: ${videos}`);
      state.videos = action.payload;
      localStorage.setItem("videos", JSON.stringify(state.videos));
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload;
      state.errorMessage = errorMessage;
    },
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setLength: (state, action) => {
      state.filters.length = action.payload;
    },
  },
});

export const getVideos = () => {
  return (dispatch) => {
    fetch(
      "https://yoga-studio-liza.herokuapp.com/videos"
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Could not get Videos");
      })
      .then((json) => {
        dispatch(videoList.actions.setVideosList(json));
      });
  };
};
