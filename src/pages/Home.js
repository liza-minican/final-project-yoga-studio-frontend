import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bgimage from "assets/image_background.jpg";
import styled from "styled-components";
import bodyicon from "assets/bodyicon.png";
import brainicon from "assets/brainicon.png";
import mandalaicon from "assets/mandalaicon.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Jumbotron
        fluid
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      >
        <Container>
          <Text1>Yoga Benefits</Text1>
          <Text>Welcome to our online yoga space. Enjoy your time here!</Text>
          <Link to="/users">
            <ButtonWrapper>Get started</ButtonWrapper>
          </Link>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Image src={bodyicon} alt="yoga-icon" />
            <Text2>
              Love your body, get stronger, treat yourself with some sweet
              strechings and toning exercises.
            </Text2>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Image src={brainicon} alt="yoga-icon" />
            <Text2>
              Clear you mind, breath deep, develop focus and let it shine
            </Text2>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Image src={mandalaicon} alt="yoga-icon" />
            <Text2>
              Set yourself free, leave things that don't serve you behind, find
              calmness and joy within you.
            </Text2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 30px;
  margin-left: 100px;
`;

const Text = styled.p`
  color: black;
  font-weight: 600;
  opacity: 1;
`;

const Text1 = styled.h1`
  margin-top: 80px;
  color: black;
  font-weight: 600;
  opacity: 1;
  font-family: "Cantarell", sans-serif;
`;
const Text2 = styled.p`
  margin-top: 50px;
  font-family: "Cantarell", sans-serif;
`;
const ButtonWrapper = styled.button`
  font-size: 18px;
  font-weight: 600;
  display: inline-block;
  transition: all 0.4s ease 0s;
  border: 2px solid black;
  background-color: #a76e43;
  color: black;
  padding: 3px;

  &:hover {
    background: lightsalmon;
    color: white;
  }

  &:active {
    background: lightsalmon;
    color: white;
  }
`;
