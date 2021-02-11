import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

import { VideoCard } from "components/VideoCard";
import { videoList } from "../reducers/videoList";
import { getVideos } from "../reducers/videoList";

export const VideoList = () => {
  //const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoList.videos);
  const filters = useSelector((store) => store.videoList.filters);
  console.log(filters);
  useEffect(() => {
    dispatch(getVideos());
  }, []);

  const filteredVideos = videos.filter((item) => {
    if (filters.category) {
      return item.category === filters.category;
    }
    return true;
  });

  return (
    <>
      <select
        value={filters.category}
        onChange={(event) =>
          dispatch(videoList.actions.setCategory(event.target.value))
        }
      >
        <option value="">Choose level</option>
        <option value="Advanced">Advanced</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Beginner">Beginner</option>
      </select>
      <select
        value={filters.length}
        onChange={(event) =>
          dispatch(videoList.actions.setLength(event.target.value))
        }
      >
        <option value={null}>Choose duration</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <Container>
        <TextWrapper>
          <h1>Video collection</h1>
          <p>
            Enjoy our cherry picked video colecction and get stronger every day!
          </p>
        </TextWrapper>
        <Row>
          {filteredVideos.map((video) => {
            return (
              <Col xs="12" sm="12" md="6" lg="4" xl="4">
                <VideoCard
                  key={video._id}
                  {...video}
                  //getVideos={getVideos}
                />
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
    font-size: 18px;
  }
`;
