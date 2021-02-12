import React from "react";
import ReactPlayer from "react-player";
import { Likes } from "components/Likes.js";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styled from "styled-components";

export const VideoCard = ({ getVideos, getFavoriteVideos, ...video }) => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  return (
    <>
      <VideoCardLink to={`/videos/${video._id}`}>
        <Video>
          <ReactPlayer
            className="react-player"
            url={`${video.videoUrl}`}
            alt={video.videoName}
            muted="true"
            controls={false}
            width="100%"
            height="100%"
          />
        </Video>
        {accessToken && <Likes id={video._id} getVideos={getVideos} />}
        <Text>{video.videoName}</Text>
        <Text1>Category: {video.category}</Text1>
        <Text1>Duration: {video.length} min</Text1>
      </VideoCardLink>
    </>
  );
};

const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 10px;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-family: "Cormorant";
`;

const Text1 = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: "Cormorant";
`;

const VideoCardLink = styled(Link)`
  border: none;
  background-color: white;
  text-decoration: none !important;
`;
