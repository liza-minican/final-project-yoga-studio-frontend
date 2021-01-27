// import { Container } from "styled-container-component";
// import { Button } from "styled-button-component";
// import { Navbar, NavbarLink } from "styled-navbar-component";
// import { Nav } from "styled-nav-component";
// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import lotus from "assets/lotus.png"; // with import
import styled from "styled-components";

export const NavBar = () => {
  //const [hidden, setHidden] = useState(true);

  return (
    <Navbar>
      <Link to="/">
        <Logo src={lotus} alt="yoga pose icon" />
      </Link>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/sessions">Log in</Link>
        <Link to="/users">Sign up</Link>
      </NavLinks>
    </Navbar>
    // <Navbar expandSm light>
    //   <Nav start>
    //     <NavbarLink light brand href="#">
    //       BRAND
    //     </NavbarLink>
    //     <Nav end>
    //       <Button
    //         light
    //         outline
    //         toggleCollapse
    //         expandSm
    //         onClick={() => setHidden(!hidden)}
    //       >
    //         <span>&#9776;</span>
    //       </Button>
    //     </Nav>
    //   </Nav>
    //   <Nav start collapse expandSm hidden={hidden}>
    //     <NavbarLink light active>
    //       Active
    //     </NavbarLink>
    //     <NavbarLink light href="#">
    //       Link
    //     </NavbarLink>
    //     <NavbarLink light href="#">
    //       Link
    //     </NavbarLink>
    //     <NavbarLink light disabled href="#">
    //       Disabled
    //     </NavbarLink>
    //   </Nav>
    // </Navbar>
  );
};
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  position: absolute;
  z-index: 1;
  width: 100%;
`;
const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  & a {
    color: grey;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
