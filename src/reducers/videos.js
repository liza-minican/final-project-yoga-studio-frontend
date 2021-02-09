import { createSlice } from "@reduxjs/toolkit";

export const selectedVideos = createSlice({
  name: "selectedVideos",
  initialState: {
		videos: []
  },
  reducers: {

    
  }





const initialState = {
  //videos: JSON.parse(localStorage.getItem("videos")) || [],
  videos: localStorage.videos || [],
};
export const collection = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setVideos: (store, action) => {
       const { videos } = action.payload;
      //store.videos = action.payload;
     // localStorage.setItem("videos", videos);
      // localStorage.setItem("videos", JSON.stringify(store.videos));
      //console.log(store.videos);
    }
  }
});
