import React from "react";
import ReactPlayer from "react-player";
import { Likes } from "components/Likes.js";

import styled from "styled-components";

export const VideoCard = ({ getVideos, ...video }) => {
  return (
    <>
      <Card>
        <Text>{video.videoName}</Text>
        <Video>
          <ReactPlayer url={`${video.videoUrl}`} alt={video.videoName} />
        </Video>
        <Likes likes={video.likes} id={video._id} getVideos={getVideos} />
        {/* <p>{video.description}</p> */}
        <Info>
          <Text1>Category: {video.category}</Text1>
          <Text1>Duration: {video.length} min</Text1>
        </Info>
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //position: relative;
  width: 25%;
  height: auto;
  margin: 20px;
  //transition: opacity 0.2s, visibility 0.2s;
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Video = styled.div`
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  justify-content: space-between;
`;
const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const Text1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 10px;
`;
