import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import AboutMovie from "./AboutMovie";

const Homepage = () => {
  // console.log(genres1);
  const dataComp = data.map((data) => {
    return (
      <AboutMovie
        key={data.id}
        name={data.show.name}
        ratings={data.show.rating.average}
        language={data.show.language}
        imgUrl={data.show.image.original}
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
