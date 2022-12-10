import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummary from "../Shared/NewsSummary/NewsSummary";

const Home = () => {
  const loader = useLoaderData();
  return (
    <div>
      {loader.map((eachNews) => (
        <NewsSummary data={eachNews} key={eachNews._id} />
      ))}
    </div>
  );
};

export default Home;
