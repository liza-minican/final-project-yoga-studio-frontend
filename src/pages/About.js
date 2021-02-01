// import React from "react";
// import styled from "styled-components";

// export const About = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <p>Some text about our cool studio</p>
//     </>
//   );
// };
import React from "react";
import { Card, Button, CardDeck, CardImg } from "react-bootstrap";
import ReactPlayer from "react-player";
import yoga_image1 from "assets/image_background3.jpg"

export const About = ({ getVideos, ...video }) => {
  return (
    <>
      <CardDeck>
        <Card style={{ width: "18rem" }}>
          <CardImg
            src={yoga_image1}
          />
          <Card.Body>
            <Card.Title>What is Yoga Benefits?</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Get Started</Button>
          </Card.Body>
        </Card>
         <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={yoga_image1} />
          <Card.Body>
            <Card.Title>Why would you have an account with us?</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Sign up</Button>
          </Card.Body>
        </Card> 
      </CardDeck>
    </>
  );
};
