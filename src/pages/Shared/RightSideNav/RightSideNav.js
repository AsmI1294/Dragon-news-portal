import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import {
  FaFacebookSquare,
  FaWhatsapp,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  return (
    <div className="px-5 mt-4">
      <ButtonGroup vertical className="w-100 ">
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <FcGoogle /> <span> Login with google</span>
        </Button>
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <VscGithub /> <span> Login with github</span>
        </Button>
      </ButtonGroup>

      <p className="text-start  my-2 text-secondary fs-4">Find us on</p>

      <ButtonGroup vertical className="w-100 ">
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <FaFacebookSquare />
          <span> Facebook</span>
        </Button>
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <FaWhatsapp />
          <span> Whatsapp</span>
        </Button>
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <FaTwitterSquare />
          <span> Twitter</span>
        </Button>
        <Button variant="outline-secondary" className="my-1 fs-6 text-start">
          <FaYoutube />
          <span> Youtube</span>
        </Button>
      </ButtonGroup>
      <BrandCarousel></BrandCarousel>
    </div>
  );
};

export default RightSideNav;
