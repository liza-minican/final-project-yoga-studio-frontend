import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { VideoCard } from "components/VideoCard";


export const VideoList = () => {
  const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";

  const [videoCollection, setVideoCollection] = useState([]);

  const getVideos = () => {
    fetch(VIDEO_COLLECTION_URL)
      .then((res) => res.json())
      .then((json) => setVideoCollection(json))
      .catch((err) => console.log(err));
  };

  useEffect(getVideos, []);

  return (
    <>   
        <h1>Video collection</h1>
        <p>Enjoy our cherry picked colecction and get stronger every day!</p>
        {videoCollection.map((video) => {
          return <VideoCard key={video._id} {...video} getVideos={getVideos} />;
        })}
    </>
  );
};

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   margin: 0;
// `;
