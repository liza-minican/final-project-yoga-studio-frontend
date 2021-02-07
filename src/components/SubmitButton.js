import React from "react";
import styled from "styled-components";

export const SubmitButton = ({ title, onClick, onSubmit }) => {
  return (
    <MainContainer onSubmit={onSubmit} onClick={onClick}>
      <TextField>{title}</TextField>
    </MainContainer>
  );
};

const MainContainer = styled.button`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 30%;
	background-color: lightsalmon;
	border: none;
	margin: 8px auto;
  
	  &:hover {
		background: lightsalmon;
		cursor: pointer;
		transition: ease-in-out .3s;
	  }
	  @media (max-width: 950px) {
		width: 70%;
	  }
	  @media (max-width: 660px) {
		width: 70%;
	
`;
const TextField = styled.p`
  font-family: "Xanh Mono", monospace;
  display: flex;
  padding: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: black;
  &:hover {
    color: #d2c5ab;
  }
`;
