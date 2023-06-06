import React from "react";
import { useNavigate } from "react-router-dom";

const AboutMovie = (props) => {
  const navigate = useNavigate();

  return (
    <div className="movie">
      <div className="movie_img">
        <img src={props.imgUrl} alt="MovieImage" />
      </div>
      <div className="movie_name">{props.name}</div>
      <div className="language ratings">Language: {props.language}</div>
      <div className="ratings">
        Ratings : {props.ratings ? props.ratings : "No ratings"}
      </div>
      <div className="btn">
        <button
          onClick={() => {
            navigate("/book");
            console.log(props);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutMovie;
