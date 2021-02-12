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
          <WrapperWelcomeText>
            <Text1>Yoga Benefits</Text1>
            <TextWrapper>
              <Text>
                Welcome to our online yoga space. Enjoy your time here!
              </Text>
            </TextWrapper>
            <Link to="/users">
              <ButtonWrapper>Get started</ButtonWrapper>
            </Link>
          </WrapperWelcomeText>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Wrapper>
              <Image src={bodyicon} alt="yoga-icon" />
              <Text2>
                Love your body, get stronger, treat yourself with some sweet
                strechings and toning exercises.
              </Text2>
            </Wrapper>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Wrapper>
              <Image src={brainicon} alt="yoga-icon" />
              <Text2>
                Clear you mind, breath deep, develop focus and let it shine
              </Text2>
            </Wrapper>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4" xl="4">
            <Wrapper>
              <Image src={mandalaicon} alt="yoga-icon" />
              <Text2>
                Set yourself free, leave things that don't serve you behind,
                find calmness and joy within you.
              </Text2>
            </Wrapper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const WrapperWelcomeText = styled.div`
  @media (max-width: 400px) {
    margin-top: -40px;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Cormorant";
`;

const Text = styled.p`
  color: black;
  font-weight: 600;
  opacity: 1;
  font-family: "Cormorant";
  font-size: 20px;
  opacity: 2 !important;
`;
const TextWrapper = styled.div`
  background-color: #d7e9dc;
  opacity: 0.7;
  width: 40%;
`;

const Text1 = styled.h1`
  margin-top: 80px;
  color: black;
  font-weight: 600;
  opacity: 1;
  font-family: "Cormorant"; ;
`;
const Text2 = styled.p`
  margin-top: 50px;
  font-size: 20px;
  font-family: "Cormorant"; ;
`;
const ButtonWrapper = styled.button`
  font-size: 18px;
  font-weight: 600;
  font-family: "Cormorant";
  display: inline-block;
  transition: all 0.4s ease 0s;
  border: none;
  background-color: #e6b451;

  color: black;
  padding: 3px;
  border-radius: 1px;

  @media (min-width: 768px) {
    &:hover {
      background: #fdcb6e;
      color: white;
    }
    &:active {
      background: #d7e9dc;
      color: black;
    }
  }
`;
