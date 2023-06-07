import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import AboutMovie from "./AboutMovie";

const Homepage = () => {
  const dataComp = data.map((data) => {
    return (
      <AboutMovie
        key={data.show.id}
        name={data.show.name}
        ratings={data.show.rating.average}
        language={data.show.language}
        imgUrl={data.show.image.original}
        dataItems={data}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div className="movie_Container">{dataComp}</div>
    </div>
  );
};

export default Homepage;
