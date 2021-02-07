import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   //videos: JSON.parse(localStorage.getItem("videos")) || []
  videos: [],
};
export const videos = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos: (store, action) => {
      store.videos = action.payload;

      //       localStorage.setItem("videos", JSON.stringify(store.videos));
      //       console.log(store.videos);
    },
  },
});
