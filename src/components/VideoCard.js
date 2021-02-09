import React from "react";
import ReactPlayer from "react-player";
import { Likes } from "components/Likes.js";
import { Link } from "react-router-dom";

//import { user } from "../reducers/user";
import { useSelector } from "react-redux";

import styled from "styled-components";

export const VideoCard = ({ getVideos, getFavoriteVideos, ...video }) => {
  const accessToken = useSelector((store) => store.user.login.accessToken);

  return (
    <>
      {accessToken && (
        <Link to={`/videos/${video._id}`}>
          <Video>
            <ReactPlayer
              url={`${video.videoUrl}`}
              alt={video.videoName}
              muted="true"
              controls={false}
            />
            <Text>{video.videoName}</Text>
            <Likes
              likes={video.likes}
              id={video._id}
              getVideos={getVideos}
              getFavoriteVideos={getFavoriteVideos}
            />
            <Text1>Category: {video.category}</Text1>
            <Text1>Duration: {video.length} min</Text1>
          </Video>
        </Link>
      )}
      {!accessToken && (
        <Link to={`/videos/${video._id}`}>
          <Video>
            <ReactPlayer url={`${video.videoUrl}`} alt={video.videoName} />
            <Text>{video.videoName}</Text>
            <Text1>Category: {video.category}</Text1>
            <Text1>Duration: {video.length} min</Text1>
          </Video>
        </Link>
      )}
    </>
  );
};

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

const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const Text1 = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
