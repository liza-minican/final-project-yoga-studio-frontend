
import React from "react";
import ReactPlayer from "react-player";
import { Likes } from 'components/Likes.js'


export const VideoCard = ({ ...video }) => {
  return (
    <>
      <p>{video.videoName}</p>
      <ReactPlayer url={`${video.videoUrl}`} alt={video.videoName} />
      <Likes likes={video.likes} id={video._id} getVideos={getVideos} />
      <p>{video.description}</p>
      <p>Category: {video.category}</p>
      <p>Duration: {video.length} min</p>
    </>
  );
}

