import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import { videoList } from "../reducers/videoList";

import styled from "styled-components";

import { VideoCard } from "components/VideoCard";
import { videoList } from "../reducers/videoList";

export const VideoList = () => {
  //const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";
  const dispatch = useDispatch();
  const [videoCollection, setVideoCollection] = useState([]);

  const getVideos = () => {
    fetch("http://localhost:8080/videos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Could not get Videos");
      })
      .then((json) => {
        dispatch(videoList.actions.setVideosList(json));
        setVideoCollection(json);
      });
  };

  useEffect(getVideos, []);

  return (
    <>
      <Container>
        <TextWrapper>
          <h1>Video collection</h1>
          <p>
            Enjoy our cherry picked video colecction and get stronger every day!
          </p>
        </TextWrapper>
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

const TextWrapper = styled.div`
  margin-top: 30px;
  h1 {
    font-family: "Cormorant";
  }
  p {
    font-family: "Cormorant";
    font-size:18px;
  }
`;