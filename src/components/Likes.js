import React from "react";
import IconButton from "assets/heart1.png";

export const Likes = ({ getVideos, likes, id }) => {
  const URL_LIKES = `http://localhost:8080/videos/${id}/like`;

  const postLike = () => {
    fetch(URL_LIKES, {
      method: "POST",
      /// should i add token authorization here?
      headers: { "Content-Type": "application/json" }
    }).then(() => getVideos())
  };

  return (
    <>
    <div className="likes">
      <button onClick={postLike} className={`button-like ${Likes(likes)}`}>
        <img
          className="heart-icon"
          src={IconButton}
          alt="heart"
          aria-label="Heart"
        />
      </button>
      <span className="numberOfHearts">x {likes}</span>
    </div>
    </>
  );
};
