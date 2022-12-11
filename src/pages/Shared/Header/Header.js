import React, { useContext, useEffect } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { FaRegUserCircle } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user, "Header");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("successfully logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (document.getElementById("collasible-nav-dropdown") != null) {
      document
        .getElementById("collasible-nav-dropdown")
        .classList.remove("dropdown-toggle");
    }
  });
  function mouseEnter(e) {
    e.target.classList.add("fs-5");
  }
  function mouseLeave(e) {
    e.target.classList.remove("fs-5");
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container className="mx-3" fluid>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>Dragon News Portal</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {user?.uid ? (
                <NavDropdown
                  title={
                    <div>
                      <span className="me-3">
                        {user?.displayName == null
                          ? user.reloadUserInfo.screenName
                          : user.displayName}
                      </span>
                      {user.photoURL ? (
                        <Image
                          style={{ height: "30px" }}
                          src={user.photoURL}
                          roundedCircle
                        ></Image>
                      ) : (
                        <FaRegUserCircle className="fs-4"></FaRegUserCircle>
                      )}
                    </div>
                  }
                  id="collasible-nav-dropdown"
                  align="end"
                >
                  <NavDropdown.Item to="/" onClick={handleLogOut}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-light text-decoration-none mx-3"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-light text-decoration-none mx-3"
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
            <hr className="d-lg-none d-block" />
            <div className="d-lg-none d-block">
              <LeftSideNav
                bgC="secondary"
                variantC="outline-light"
              ></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
