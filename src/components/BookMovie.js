import { TextField } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";

const BookMovie = (props) => {
  const location = useLocation();
  const genresItems = location.state.data.show.genres.map((element) => {
    return (
      <div className="genres_items">
        <ul>
          <li>{element}</li>
        </ul>
      </div>
    );
  });
  // console.log();
  return (
    <div className="bookMovie_container">
      <div className="img">
        <img src={location.state.data.show.image.original} alt="ShowImage" />
      </div>
      <div className="movie_content">
        <div className="movie_name">
          <h1>{location.state.data.show.name}</h1>
        </div>
        <div className="ratings ">
          <h4 className="ratings movie_ratings">
            <div className="icon">
              <i className="fa-solid fa-regular fa-star"></i>
            </div>
            Ratings : {location.state.data.show.rating.average}
          </h4>
        </div>
        <div className="genres">{genresItems}</div>
        <div className="summary">
          <h3>Summary</h3>
          <p style={{ fontFamily: "Poppins" }}>
            {location.state.data.show.summary}
          </p>
        </div>
        <div className="btn book_btn">
          <button>Book Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default BookMovie;
