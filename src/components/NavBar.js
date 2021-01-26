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
    <nav>
      <Link to="/">
        <Logo src={lotus} alt="yoga pose icon" />
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
        <li>
          <Link to="/sessions">Log in</Link>
        </li>
        <li>
          <Link to="/users">Sign up</Link>
        </li>
      </ul>
    </nav>
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
