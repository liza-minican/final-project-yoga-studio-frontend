//import React from "react";
//import { Link } from "react-router-dom";

// this is a card of the videos that are shown on the main page
// export const VideoCard = ({ videoName, description, _id }) => {
//   return (
//     <Link to={`/videos/${_id}`}>
//       {/* <img  src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img> */}
//       <div className="video-card-details">
//         <h1 className="title">{videoName}</h1>
//         <p className="video-description">{description}</p>
//       </div>
//     </Link>
//   );
// };
import React from "react";

export const VideoCard = () => {
  return (
    <>
      <h1>Video</h1>
      <p>One video description</p>
    </>
  );
};
