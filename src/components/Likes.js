import React from "react";
import styled from "styled-components";
import { user } from "../reducers/user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Likes = ({ getVideos, id }) => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.loggedIn);
  const URL_FAVORITE = `http://localhost:8080/users/${userId}/favorites/${id}`;

  const postLike = () => {
    console.log(userId);
    console.log(id);
    fetch(URL_FAVORITE, {
      method: "PUT",
      /// should i add token authorization here?
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(
          "Could not add video to favorites. User must be logged in."
        );
      })
      .then((json) => {
        dispatch(user.actions.setFavoriteVideos(json));
      });
  };

  //then(() => getVideos());
  return (
    <>
      <WrapperLikes className="likes">
        <Button onClick={postLike}>Add</Button>
      </WrapperLikes>
    </>
  );
};

// import React from "react";
// import IconButton from "assets/iconfinder_86_815175.png";
// import styled from "styled-components";

// export const Likes = ({ getVideos, likes, id }) => {
//   const URL_LIKES = `http://localhost:8080/videos/${id}/like`;

//   const postLike = () => {
//     fetch(URL_LIKES, {
//       method: "POST",
//       /// should i add token authorization here?
//       headers: { "Content-Type": "application/json" },
//     }).then(() => getVideos());
//   };

//   const ifLiked = () => {
//     if (likes > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   return (
//     <>
//       <WrapperLikes className="likes">
//         <Button onClick={postLike} ifLiked={ifLiked}>
//           <Image
//             className="heart-icon"
//             src={IconButton}
//             alt="heart"
//             aria-label="Heart"
//           />
//         </Button>
//         <Text>x {likes}</Text>
//       </WrapperLikes>
//     </>
//   );
// };

const WrapperLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Button = styled.button`
  //   //dont know how to write this in a coreect way
  background: "blue";
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 4px;
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
