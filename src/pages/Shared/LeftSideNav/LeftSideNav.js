import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  let activeStyle = {
    fontWeight: "bold",
  };

  useEffect(() => {
    fetch("https://dragon-news-portal-nine.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="box">
      <Navbar bg="light" variant="light" className="vh-100 align-items-start ">
        <Container className="d-flex flex-column ">
          <Nav className="d-flex flex-column ">
            {category.map((categories) => (
              <NavLink
                to={`/category/${categories.id}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <Button
                  variant="outline-secondary"
                  className="border-0 w-100 my-2 fs-5"
                >
                  {categories.name}
                </Button>
              </NavLink>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default LeftSideNav;
