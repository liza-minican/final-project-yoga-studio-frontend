import React from "react";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <NotFoundContainer>
      <h2>PAGE NOT FOUND</h2>
      <p>Sorry, the page you are looking for could not be found.</p>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: auto;
  margin-top: 150px;
`;
