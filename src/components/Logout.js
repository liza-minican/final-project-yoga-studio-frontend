import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { user } from "reducers/user";
import styled from "styled-components";

export const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const dispatch = useDispatch();

  // const LOGOUT_URL = "http://localhost:8080/users/logout";

  // const handleLogOut = () => {
  //   fetch(LOGOUT_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ userId: userId }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       dispatch(user.actions.logout());
  //       setLoggedOut(true);
  //       console.log(json);
  //     });
  // };
  // useEffect(handleLogOut, []);

  const handleLogOut = () => {
    dispatch(user.actions.logout());
    setLoggedOut(true);
  };
  return (
    <>
      {loggedOut === false ? (
        <Link to="/" type="submit" onClick={handleLogOut}>
          Logout
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

// const LogOutButton = styled.button`
//   background: inherit;
//   border: none;
//   color: #c9c4c4;
//   cursor: pointer;
//   font-family: "Montserrat", sans-serif;
//   font-size: 18px;
//   font-weight: bold;
//   margin: 2vh 1vw;
//   padding: 0;

//   &:hover {
//     cursor: pointer;
//     text-decoration: underline;
//     color: #fff;
//   }
// `;
