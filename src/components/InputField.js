import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

export const InputField = ({
  placeholder,
  type,
  value,
  onChange,
  minLength
}) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      minLength={minLength}
      required
    />
  );
};
const Input = styled.input`
  border-bottom: none;
  border-top: none;
  border-left: none;
  border-right: none;
  text-decoration: none;
  //border-radius: 20px;
  background-color: white;
  //box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  font-style: italic;
  font-weight: 300;
  font-size: 18px;
  width: 70%;
  padding: 10px;
  font-family: "Xanh Mono", monospace;
  margin: 30px;
  @media (max-width: 950px) {
    margin: 10px;
    font-size: 16px;
  }
  @media (max-width: 660px) {
    margin: 10px;
    font-size: 16px;
  }
`;
