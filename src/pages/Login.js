import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SubmitButton } from "components/SubmitButton";
import { InputField } from "components/InputField";
import { UserProfile } from "./UserProfile";
import { user } from "../reducers/user";
import loginImage from "assets/login.jpg";

import styled from "styled-components";
import { rgba } from "polished";

const LOGIN = "http://localhost:8080/sessions";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInFailed, setLogInFailed] = useState(false);
  const [logInSuccess, setLogInSuccess] = useState(false);

  const handleLoginSuccess = (loginResponse) => {
    localStorage.setItem("validToken", loginResponse.accessToken);
    dispatch(
      user.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
    setLogInSuccess(true);
    dispatch(user.actions.toggleLoggedState(true));
  };

  const handleLoginFailed = () => {
    dispatch(user.actions.setAccessToken({ accessToken: null }));
    dispatch(user.actions.toggleLoggedState(false));
    setLogInFailed(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(LOGIN, {
      method: "POST",
      body: JSON.stringify({
        password,
        email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not sign in. Please try again");
        }
        return res.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err))
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };

  return (
    <>
      {logInSuccess === true ? (
        <UserProfile />
      ) : (
        <Container>
          <Row>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Form onSubmit={handleFormSubmit}>
                <Text>Log in</Text>
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
                {logInFailed && (
                  <span>
                    <Text>
                      Failed to log in. Email and/or password incorrect. Please
                      try again.
                    </Text>
                  </span>
                )}
                <SubmitButton title="Log in" />
              </Form>
            </Col>
            <Col xs="12" sm="12" md="6" lg="6" xl="6">
              <Image src={loginImage} alt="yoga-girl" />
            </Col>
          </Row>
        </Container>
      )}
      ;
    </>
  );
};

// const Image = styled.main`
//   //background-image: url("${process.env.PUBLIC_URL + "/flower.jpg"}");
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
// `;

const Image = styled.img`
  width: 500px;
  height: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 30px;
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
