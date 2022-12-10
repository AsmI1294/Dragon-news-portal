import React from "react";
import Card from "react-bootstrap/Card";
import { HiShare } from "react-icons/hi";
import { FaBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsSummary = ({ data }) => {
  return (
    <div className="my-3">
      <Card>
        <Card.Header className="d-flex align-items-center">
          <div className="d-flex text-start align-items-center">
            <img
              src={data.author.img}
              style={{ height: "60px" }}
              className="img-thumbnail rounded-circle me-2"
              alt="..."
            />
            <div>
              <div>
                {data.author.name === "system" ||
                data.author.name === null ||
                data.author.name === ""
                  ? "Anonymous author"
                  : data.author.name}
              </div>
              <div className="text-muted">
                {" "}
                {data.author.published_date === "system" ||
                data.author.published_date === null ||
                data.author.published_date === ""
                  ? "No Date Found"
                  : data.author.published_date}
              </div>
            </div>
          </div>
          <div className="ms-auto">
            <FaBookmark
              className="me-2"
              style={{
                cursor: "pointer",
              }}
            />
            <HiShare
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Img variant="top" src={data.image_url} />
          <div className="text-start">
            {data.details.length <= 200 ? (
              <p>{data.details}</p>
            ) : (
              <p>
                {data.details.slice(0, 200) + "...  "}
                <Link to={`/news/${data._id}`}>read more</Link>
              </p>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <AiFillStar className="me-1 text-warning" />
            <span>{data.rating.number}</span>
          </div>
          <div className="ms-auto">
            <AiFillEye className="me-1" />
            <span>{data.total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummary;
