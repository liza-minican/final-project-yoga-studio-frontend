import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import styled from "styled-components";

//fetch according to video id
//this is the page that shows one video with its details

export const VideoInfo = () => {
  const { videoId } = useParams();

  const [videoInfo, setVideoInfo] = useState({});

  const VIDEO_URL = `http://localhost:8080/videos/${videoId}`;

  const getVideoInfo = () => {
    fetch(VIDEO_URL)
      .then((response) => response.json())
      .then((json) => {
        setVideoInfo(json);
      });
  };

  useEffect(getVideoInfo, []);
  console.log(getVideoInfo);
  
  return (
    <>
      <article>
        <p>{videoInfo.videoName}</p>
        <ReactPlayer url={`${videoInfo.videoUrl}`} alt={videoInfo.videoName} />
        <p>{videoInfo.description}</p>
      </article>
    </>
  );
};
