import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
const News = () => {
  const loader = useLoaderData();
  return (
    <div className="my-3">
      <Card>
        <Card.Body>
          <Card.Title>{loader.title}</Card.Title>
          <Card.Img variant="top" className="mb-2" src={loader.image_url} />
          <Card.Text className="text-start">{loader.details}</Card.Text>
          <Link to={`/category/${loader.category_id}`}>
            <Button variant="outline-secondary" className="w-100">
              All news of this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
