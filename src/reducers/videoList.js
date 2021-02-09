import { createSlice } from "@reduxjs/toolkit";

export const videoList = createSlice({
  name: "videoList",
  initialState: {
    videos: JSON.parse(localStorage.getItem("videos")) || [],
    errorMessage: "",
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
  },
});
