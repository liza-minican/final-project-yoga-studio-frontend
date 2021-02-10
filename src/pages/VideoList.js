import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import { videoList } from "../reducers/videoList";

//import styled from "styled-components";

import { VideoCard } from "components/VideoCard";

export const VideoList = () => {
  const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";
  //const dispatch = useDispatch();
  const [videoCollection, setVideoCollection] = useState([]);

  //dispatch does not work in the fetc h and I cant use localstorage somehow as well

  //const videos = useSelector((store) => store.videos.videos);
  // const getVideos = () => {
  //   fetch(VIDEO_COLLECTION_URL)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch(videos.actions.setVideos(json));
  //       setVideoCollection(json);
  //     });
  // };

  const getVideos = () => {
    fetch(VIDEO_COLLECTION_URL)
      .then((res) => res.json())
      .then(
        (json) => setVideoCollection(json)
        // dispatch(videoList.actions.setVideosList(json)
      )
      .catch((err) => console.log(err));
  };

  useEffect(getVideos, []);

  return (
    <>
      <h1>Video collection</h1>
      <p>
        Enjoy our cherry picked video colecction and get stronger every day!
      </p>
      <Container>
        <Row>
          {videoCollection.map((video) => {
            return (
              <Col xs="12" sm="12" md="6" lg="4" xl="4">
                <VideoCard key={video._id} {...video} getVideos={getVideos} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
