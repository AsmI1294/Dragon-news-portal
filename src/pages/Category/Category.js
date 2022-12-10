import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../Shared/NewsSummary/NewsSummary";

const Category = () => {
  const loader = useLoaderData();
  return (
    <div>
      <h2 className="text-start">This category has: {loader.length} news</h2>
      {loader == "" ? (
        <p className="fs-2 text-secondary">No result found</p>
      ) : (
        loader.map((eachNews) => (
          <NewsSummary data={eachNews} key={eachNews._id} />
        ))
      )}
    </div>
  );
};

export default Category;
