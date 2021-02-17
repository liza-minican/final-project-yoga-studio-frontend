import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Favorites } from "components/Favorites.js";
import previous from "assets/previous.png";

import styled from "styled-components";


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
  }
  @media (max-width: 660px) {
    width: 80%;
  }
`;

const WrapperGoBack = styled.div`
  text-decoration: none !important;
  margin: 20px;
  p {
    font-family: "Cormorant";
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;
  display: block;
  padding-top: 56.25%;
  width: 100%;
  margin-bottom: 20px;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Text = styled.h1`
  font-size: 25px;
  font-family: "Cormorant";
`;
const Text1 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  font-family: "Cormorant";
`;
const Text2 = styled.p`
  font-size: 18px;
  font-family: "Cormorant";
`;

//fetch according to video id
//this is the page that shows one video with its details

export const VideoInfo = () => {
  const { videoId } = useParams();
  const accessToken = useSelector((store) => store.user.login.accessToken);

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
        <WrapperGoBack>
          <Icon src={previous} alt="back-arrow" />
          <p>Back to Videos</p>
        </WrapperGoBack>
      </Link>
      <Wrapper>
        <Text>{videoInfo.videoName}</Text>
        <Video>
          <ReactPlayer
            className="react-player"
            url={`${videoInfo.videoUrl}`}
            alt={videoInfo.videoName}
            muted="true"
            controls={false}
            width="100%"
            height="100%"
          />
        </Video>
        {accessToken && <Favorites id={videoInfo._id} />}
        <Text1>Category: {videoInfo.category}</Text1>
        <Text1>Duration: {videoInfo.length} min</Text1>
        <Text2>{videoInfo.description}</Text2>
      </Wrapper>
    </>
  );
};
