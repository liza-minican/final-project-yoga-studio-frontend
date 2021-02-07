import React from "react";
import styled from "styled-components";
import { user } from "../reducers/user";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Likes = ({ getVideos, id }) => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
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
        //getVideos();
      });
  };

  //then(() => getVideos());
  return (
    <>
      <WrapperLikes>
        <Button onClick={postLike}>Add</Button>
        <Button onClick={postLike}>Remove</Button>
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
// import React, { useState, useEffect } from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// //import styled from "styled-components";

// import { VideoCard } from "components/VideoCard";

// export const FavoriteVideos = () => {
//   //made up url????
//   const FAVORITE_VIDEO_COLLECTION_URL = "http://localhost:8080/users/id/videos/id";

//   const [videoCollection, setVideoCollection] = useState([]);

//   const getVideos = () => {
//     fetch(FAVORITE_VIDEO_COLLECTION_URL)
//       .then((res) => res.json())
//       .then((json) => setVideoCollection(json))
//       .catch((err) => console.log(err));
//   };

//   useEffect(getVideos, []);

//   return (
//     <>
//       <h1>Your favourite Video collection</h1>>
//       <Container>
//         <Row>
//           {videoCollection.map((video) => {
//             return (
//               <Col xs="12" sm="12" md="6" lg="4" xl="4">
//                 <VideoCard key={video._id} {...video} getVideos={getVideos} />
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </>
//   );
// };

const WrapperLikes = styled.div`
    display: flex;
    justify-content: space-around;
}
`;
const Button = styled.button`
  //   //dont know how to write this in a coreect way
  background: "blue";
  border: none;
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
