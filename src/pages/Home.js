import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import bgimage from "assets/image_background.jpg";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <Jumbotron
        fluid
        style={{ backgroundImage: `url(${bgimage})`,
         backgroundSize: "cover"}}
      >
        <Container>
          <Text1>Yoga Benefits</Text1>
          <Text>Welcome to our online yoga space. Enjoy your time here!</Text>
          <p>
            <button variant="primary">Get started</button>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

const Text1 = styled.h1`
  margin-top: 80px;
  color: black;
  font-weight:600;
  opacity: 1;
`;
const Text = styled.p`
  color: black;
  font-weight: 600;
  opacity: 1;
`;