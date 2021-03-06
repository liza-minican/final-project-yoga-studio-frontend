import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styled from "styled-components";

import signup1 from "assets/signup1.jpg";
import signup2 from "assets/signup2.jpg";

import { SubmitButton } from "components/SubmitButton";
import { InputField } from "components/InputField";
import { UserProfile } from "./UserProfile";
import { user } from "../reducers/user";

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-top: 30px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 100px auto;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: none;
  background-color: whitesmoke;
  @media (max-width: 950px) {
    margin: 30px auto;
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  @media (max-width: 660px) {
    margin: 30px auto;
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
`;
const Text = styled.p`
  display: flex;
  padding: 10px;
  font-size: 20px;
  flex-direction: column;
  color: black;
  font-weight: bold;
  font-family: "Xanh Mono", monospace;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  margin-top: 30px;
  letter-spacing: 2px;
  @media (max-width: 950px) {
    font-size: 17px;
    margin-top: 10px;
  }
  @media (max-width: 660px) {
    font-size: 17px;
    margin-top: 10px;
  }
`;

const SIGNUP = "https://yoga-studio-liza.herokuapp.com/users";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpFailed, setSignUpFailed] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUpSuccess = (loginResponse) => {
    localStorage.setItem("validToken", loginResponse.accessToken);
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    setSignUpSuccess(true);
    dispatch(user.actions.setEmail({ email: loginResponse.email }));
    dispatch(user.actions.setUserName({ userName: loginResponse.userName }));
    dispatch(user.actions.toggleLoggedState(true));
  };

  const handleSignUpFailed = () => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.toggleLoggedState(false));
    setSignUpFailed(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(SIGNUP, {
      method: "POST",
      body: JSON.stringify({
        userName,
        password,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not create account. Please try again");
        }
        return res.json();
      })
      .then((json) => handleSignUpSuccess(json))
      .catch((err) => handleSignUpFailed(err))
      .finally(() => {
        setUserName("");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {signUpSuccess === true ? (
        <UserProfile />
      ) : (
        <Container>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Form onSubmit={handleFormSubmit}>
                <Text>Sign up</Text>
                <InputField
                  name="name"
                  label="Name"
                  type="name"
                  value={userName}
                  placeholder="name"
                  onChange={(event) => setUserName(event.target.value)}
                  minLength="5"
                />
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(event) => setEmail(event.target.value)}
                  minLength="3"
                />
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={(event) => setPassword(event.target.value)}
                  minLength="6"
                />

                {signUpFailed && (
                  <span>
                    <Text>Failed to sign up.</Text>
                  </span>
                )}
                <SubmitButton title="Sign up" />
              </Form>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Image src={signup2} alt="yoga-image" />
              <Image src={signup1} alt="yoga-image" />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
