import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import lotus from "assets/lotus.png";
import styled from "styled-components";
import { user } from "reducers/user";
// import { Logout } from "./Logout";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.userName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(user.actions.logout());
  };
  //console.log(userName);
  //const user = JSON.parse(localStorage.getItem("userName"));

  return (
    <Navbar
      className="w-auto p-3 fixed-top"
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
            {accessToken && (
              <>
                <Nav.Link as={Link} to="/" onClick={handleLogOut}>
                  Logout
                </Nav.Link>
                <LoggedInWrapper>
                  <Text>Welcome {userName}</Text>
                  <Nav.Link as={Link} to="/profile">
                    Go to favorites
                  </Nav.Link>
                </LoggedInWrapper>
              </>
            )}
            {!accessToken && (
              <>
                <Nav.Link as={Link} to="/sessions">
                  Log in
                </Nav.Link>
                <Nav.Link as={Link} to="/users">
                  Sign up
                </Nav.Link>
              </>
            )}
          </NavLinks>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const NavLinks = styled.div`
  //justify-self: end;
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

const Text = styled.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: bold;
  color: #a76e43;
  text-transform: uppercase;
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledHamburger = styled(Navbar.Toggle)`
  border: none;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath 
    stroke='rgb(167,110,67)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
`;
const LoggedInWrapper = styled.div`
  @media (min-width: 900px) {
    display: flex;
    //justify-content:flex-end; why does not work
    margin-left: 200px;
  }
`;
