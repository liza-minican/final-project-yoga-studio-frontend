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
      <Wrapper>
        <p>{videoInfo.videoName}</p>
        <ReactPlayer url={`${videoInfo.videoUrl}`} alt={videoInfo.videoName} />
        <p>{videoInfo.description}</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
display:flex
`

// .movie-details-container {
//   position: absolute;
//   display: flex;
//   align-items: flex-end;
//   left: 50px;
//   bottom: 50px;
// }
// .movie-details-backdrop-image {
//   width: 100vw;
//   height: 100vh;
//   object-fit: cover;
//   margin-bottom: -4px;
//   filter: brightness(65%);
// }

// .movie-details-poster {
//   width: 350px;
//   border: 5px solid #fff;
// }

// .movie-details-information {
//   margin: 20px;
//   max-width: 450px;
//   color: #fff;
// }
// .vote-red {
//   margin-left: 10px;
//   color: red;
//   font-weight: 400;
//   font-size: 20px;
// }

// @media (min-width: 768px) and (max-width: 1023px) {
//   .movie-details-poster {
//     width: 250px;
//   }
//   .movie-details-information {
//     width: 350px;
//   }
// }
// @media (max-width: 767px) {
//   .movie-details-poster {
//     display: none;
//   }
//   .movie-details-information {
//     width: 250px;
//   }
// }