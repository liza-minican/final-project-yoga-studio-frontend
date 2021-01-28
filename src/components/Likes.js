import React from "react";
import IconButton from "assets/iconfinder_86_815175.png";
import styled from "styled-components";

export const Likes = ({ getVideos, likes, id }) => {
  const URL_LIKES = `http://localhost:8080/videos/${id}/like`;

  const postLike = () => {
    fetch(URL_LIKES, {
      method: "POST",
      /// should i add token authorization here?
      headers: { "Content-Type": "application/json" },
    }).then(() => getVideos());
  };

  const ifLiked = () => {
    if (likes > 0) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <WrapperLikes className="likes">
        <Button onClick={postLike} ifLiked={ifLiked}>
          <Image
            className="heart-icon"
            src={IconButton}
            alt="heart"
            aria-label="Heart"
          />
        </Button>
        <Text>x {likes}</Text>
      </WrapperLikes>
    </>
  );
};

const WrapperLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Button = styled.button`
  //dont know how to write this in a coreect way
  background:${(props) => (props.ifLiked ? "yellow" : "white")}; 

  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  & hover {
    cursor: pointer;
  }
  
`;

const Image = styled.img`
  width: 12px;
  height: 12px;
`;
const Text = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  margin-left: 7px;
`;
