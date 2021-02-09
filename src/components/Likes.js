import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { user } from "../reducers/user";

export const Likes = ({ getFavoriteVideos, id }) => {
  // id is a video id that is coming as a prop from the Video Card component
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const URL_FAVORITE = `http://localhost:8080/users/${userId}/favorites/${id}`;

  //save works
  const handleSave = () => {
    fetch(URL_FAVORITE, {
      method: "PUT",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Could not add video to favorites. User must be logged in."
        );
      })
      .then((json) => {
        dispatch(user.actions.setFavoriteVideos(json));
        // dispatch(user.actions.setFavoriteVideos(json)
        // getFavoriteVideos(userId, accessToken);
      });
  };

  const handleRemove = () => {
    fetch(URL_FAVORITE, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Could not remove video from favorites. User must be logged in."
        );
      })
      .then((json) => {
        dispatch(user.actions.setFavoriteVideos(json));
        // dispatch(user.actions.setFavoriteVideos(json)
        // getFavoriteVideos(userId, accessToken);
      });
  };

  // then(() => getVideos());
  return (
    <>
      <WrapperLikes>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleRemove}>Remove</Button>
      </WrapperLikes>
    </>
  );
};

const WrapperLikes = styled.div`
    display: flex;
    justify-content: space-around;
}
`;
const Button = styled.button`
  //dont know how to write this in a correct way
  background: "blue";
  border: black;
  //border-radius:50% ;
  width: 20px;
  height: 20px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  */ & hover {
    cursor: pointer;
  }
`;

// const Image = styled.img`
//   width: 12px;
//   height: 12px;
// `;
// const Text = styled.p`
//   font-family: "Courier New", Courier, monospace;
//   font-size: 14px;
//   margin-left: 7px;
// `;
