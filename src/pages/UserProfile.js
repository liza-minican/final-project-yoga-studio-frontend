import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { VideoCard } from "components/VideoCard";

import styled from "styled-components";

import { getFavoriteVideos } from "../reducers/user";

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

export const UserProfile = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user.login.userName);
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const favoriteVideos = useSelector(
    (store) => store.user.userActions.favoriteVideos
  );

  // get favoritevideos and dispatch to store:
  useEffect(() => {
    dispatch(getFavoriteVideos(userId, accessToken));
  }, [dispatch, userId, accessToken]);

  return (
    <>
      <Container>
        <TextWrapper>
          <h1>Hello, {userName}</h1>
          <p>Here is your favorite video collection.</p>
        </TextWrapper>
        <Row>
          {favoriteVideos.map((video) => {
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
