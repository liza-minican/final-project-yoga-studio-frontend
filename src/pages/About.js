import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import yoga from "assets/yoga.jpg";

import styled from "styled-components";

export const About = () => {
  return (
    <>
      <Container>
        <WrapperAbout>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Image src={yoga} alt="yoga-image" />
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Text>
                Yoga Benfits is a yoga studio online. It was created to Clear
                you mind, breath deep, develop focus and let your inner light
                shine. Yoga Benfits is a yoga studio online. It was created to
                Clear you mind, breath deep, develop focus and let your inner
                light shine. Yoga Benfits is a yoga studio online. It was
                created to Clear you mind, breath deep, develop focus and let
                your inner light shine.
              </Text>
            </Col>
          </Row>
        </WrapperAbout>
      </Container>
    </>
  );
};

const Image = styled.img`
  //position:relative;
  width: 500px;
  height: auto;
  @media (max-width: 900px) {
    display: none;
  }   
`;

const Text = styled.div`
  //position: absolute;
  font-size: 20px;
  background: #f0e5d8;
  width: 500px;
  height: auto;
  font-family: "Cormorant";
`;

// const Image1 = styled.main`
//   //background-image: url("${process.env.PUBLIC_URL + "/flower.jpg"}");
//   background-color:
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
// `;
const WrapperAbout = styled.div`
  margin-top: 30px;-
`;