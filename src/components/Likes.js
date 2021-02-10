import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { user } from "../reducers/user";

export const Likes = ({ id }) => {
  // id is a video id that is coming as a prop from the Video Card component
  const dispatch = useDispatch();
  const favoriteVideos = useSelector(
    (store) => store.user.userActions.favoriteVideos
  );
  const added = favoriteVideos.some((el) => el._id === id)
  ;
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const URL_FAVORITE = `http://localhost:8080/users/${userId}/favorites/${id}`;

  console.log(favoriteVideos);
  // const checkAddedState = () => {
  //   // const found = favoriteVideos.some((el) => el._id === id)
  //   // ;
  //   if (found) {
  //     setAdded(true);
  //   } else {
  //     setAdded(false);
  //   }
  // };
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
        // getFavoriteVideos(userId, accessToken);
      });
  };

  // then(() => getVideos());
  return (
    <>
      <Link to="/profile">
        <WrapperLikes>
          {!added && <Button onClick={handleSave}>Save</Button>}
          {added && <Button onClick={handleRemove}>Remove</Button>}
        </WrapperLikes>
      </Link>
    </>
  );
};

const WrapperLikes = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  display: flex;
  padding: 5px;
  font-size: 12px;
  flex-direction: column;
  color: black;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #a76e43;
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
