import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const LeftSideNav = ({ bgC, variantC }) => {
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
    <div>
      <Navbar bg={bgC} className="align-items-start">
        <Container className="d-flex flex-column ">
          <Nav className="d-flex flex-column ">
            {category.map((categories) => (
              <NavLink
                to={`/category/${categories.id}`}
                key={categories.id}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <Button variant={variantC} className="border-0 w-100 my-2 fs-5">
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
