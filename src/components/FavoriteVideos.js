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
