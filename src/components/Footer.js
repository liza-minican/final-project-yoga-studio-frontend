import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <MyFooter>
      <p> Yoga Benefits</p>
      <p>Created by Liza Minican</p>
      <p>All rights reserved {new Date().getFullYear()}</p>
    </MyFooter>
  );
};

const MyFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background: #91a5a1;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 16px;
  margin-top: 50px;
  padding-top: 50px;
  p{
  font-family: "Cormorant";
  font-weight:bold;
  }
`;
