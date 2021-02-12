//import React, { useEffect } from "react";
import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videoList.videos);
  const filters = useSelector((store) => store.videoList.filters);

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const filteredVideos = videos.filter((item) => {
    if (filters.category) {
      return item.category === filters.category;
    }
    return true;
  });

  return (
    <>
      {/* <select
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
      </select> */}
      <Container>
        <WrapperMain class="demo">
          <WrapperForm class="dropdown-container">
            <Form
              value={filters.category}
              onChange={(event) =>
                dispatch(videoList.actions.setCategory(event.target.value))}
            >
              <option value="">Choose level</option>
              <option value="Advanced">Advanced</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Beginner">Beginner</option>
            </Form>
          </WrapperForm>
        </WrapperMain>
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
const WrapperMain = styled.div`
  margin: 50px 0px;
`;

const WrapperForm = styled.div`
  width: 150px;
  //margin: 100px auto;
  position: relative;
`;

const Form = styled.select`
  display: block;
  font-size: 16px;
  font-family: "Cormorant", sans-serif;
  font-weight: 600;
  color: grey;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  appearance: none;
  background-color: #f4f7f8;
  background-image: url("./images/arrow.png"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 4vw auto, 100%;
  outline: none !important;

  &hover {
    border-color: yellow;
    //outline: none;
  }

  &focus {
    border-color: yellow;
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    //outline: none;
  }
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

/* width: 100%;
  height: 50px;
  font-size: 100%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0;
  background-color: #c0392b;
  border: none;
  border-bottom: 2px solid #962d22;
  color: white;
  appearance: none;
  padding: 10px;
  padding-right: 38px;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease; */
