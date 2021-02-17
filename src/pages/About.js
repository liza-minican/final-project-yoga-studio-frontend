import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import yoga from "assets/yoga.jpg";

import styled from "styled-components";

const Image = styled.img`
  position: relative;
  overflow: visible;
  width: 120%;
  left: -20%;
  height: auto;

  @media (max-width: 900px) {
    margin-top: 100px;
    margin-bottom: 200px;
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  font-size: 20px;
  background: #f0e5d8;
  height: auto;
  margin-right: -5%;
  margin-left: 20%;
  margin-top: 5%;
  font-family: "Cormorant";
  z-index: 2;
  @media (max-width: 900px) {
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-family: "Cormorant";
  padding: 50px;

  @media (max-width: 900px) {
    padding: 15px;
  }
`;

const WrapperAbout = styled.div`
  margin-top: 30px;
  position: relative;
  margin-bottom: 150px;
  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
`;

export const About = () => {
  return (
    <>
      <Container>
        <WrapperAbout>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <TextWrapper>
                <Text>
                  Yoga Benfits is a yoga studio online. It was created to help
                  you get stronger,calmer and more focused in the comfort of
                  your own home. Choose videos that you like, breath, enjoy the
                  scenery and high quality content, imagine you are there, you
                  are a part of nature. Let your inner light shine. Yoga
                  Benefits will be always there when you need it, any time of
                  the day, any day!
                </Text>
              </TextWrapper>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Image src={yoga} alt="yoga-image" />
            </Col>
          </Row>
        </WrapperAbout>
      </Container>
    </>
  );
};
