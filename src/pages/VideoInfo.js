import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
      <Link to="/videos" exact="true">
        <div className="back-arrow-text">
          {/* <img className="arrow" src={arrow} alt="back-arrow" /> */}
          <p className="back-movies-text">Back to Videos</p>
        </div>
      </Link>
      <Wrapper>
        <h1>{videoInfo.videoName}</h1>
        <Video>
          <ReactPlayer
            url={`${videoInfo.videoUrl}`}
            alt={videoInfo.videoName}
            muted="true"
            controls={false}
            // width="900px"
            // height="500px"
          />
        </Video>
        <h2>About</h2>
        <p>{videoInfo.description}</p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 50px auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 950px) {
    margin: 30px auto;
    width: 60%;
    //margin-bottom: 10px;
  }
  @media (max-width: 660px) {
    //margin: 30px auto;
    width: 80%;
    //margin-bottom: 10px;
  }
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
  }
`;

// const Video = styled.div`
//   overflow: hidden;
//   position: relative;
//   width: 100%;

//   after {
//     padding-top: 56.25%;
//     display: block;
//     content: "";
//   }

// `;

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
