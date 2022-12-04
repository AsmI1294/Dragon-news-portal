import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
import RightsideNav from "../pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Row>
          <Col lg={2}>
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg={7}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
