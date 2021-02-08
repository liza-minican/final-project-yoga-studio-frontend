import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { user } from "../reducers/user";

export const Likes = ({ getVideos, id }) => {
  // id is a video id that is coming as a prop from the Video Card component
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const URL_FAVORITE = `http://localhost:8080/users/${userId}/favorites/${id}`;

  //save works
  const handleSave = () => {
    // console.log(userId);
    // console.log(id);
    fetch(URL_FAVORITE, {
      method: "PUT",
      /// should i add token authorization here?
      headers: { Authorization: accessToken },
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
        // here we dispatch favorite video collection to the redux store
        dispatch(user.actions.setFavoriteVideos(json));
        // getVideos();
      });
  };

  const handleRemove = () => {
    // console.log(userId);
    //console.log(accessToken);
    fetch(URL_FAVORITE, {
      method: "DELETE",
      headers: { Authorization: accessToken },
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      }
      throw new Error(
        "Could not remove video from favorites. User must be logged in."
      );
    });
    // .then((json) => {
    //   // here we dispatch favorite video collection to the redux store
    //   dispatch(user.actions.setFavoriteVideos(json));
    //   // getVideos();
    // });
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
