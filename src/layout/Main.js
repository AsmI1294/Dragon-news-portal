import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
import RightsideNav from "../pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={2}>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
