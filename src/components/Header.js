import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import lotus from "assets/lotus.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Navbar
      className="w-auto p-1 fixed-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="ligth"
    >
      <StyledHamburger
        className="order-0"
        aria-controls="responsive-navbar-nav"
      />

      <Navbar.Brand as={Link} to="/">
        <Logo src={lotus} alt="yoga pose icon" />
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-auto">
          <NavLinks>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/videos">
              Videos
            </Nav.Link>
            <Nav.Link as={Link} to="/sessions">
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Sign up
            </Nav.Link>
          </NavLinks>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
const NavLinks = styled.div`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
  & a {
    color: grey;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 900px) {
      &:hover {
        color: #fdcb6e;
        border-bottom: 1px solid #fdcb6e;
      }
    }
  }
`;

const StyledHamburger = styled(Navbar.Toggle)`
  border: none;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath 
    stroke='rgba(183, 176, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;
