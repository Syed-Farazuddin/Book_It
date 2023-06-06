import React from "react";
import { AiFillStar } from "react-icons/ai";

const BookMovie = (props) => {
  return (
    <div className="bookMovie_container">
      <div className="img">
        <img
          src="https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg"
          alt="ShowImage"
        />
      </div>
      <div className="movie_content">
        <div className="movie_name">
          <h1>All Fake</h1>
        </div>
        <div className="ratings ">
          <h4 className="ratings movie_ratings">
            <div className="icon">
              {/* <AiFillStar style={{ color: "#ec1839" }} /> */}
              <i class="fa-solid fa-regular fa-star"></i>
            </div>
            Ratings : 8.8
          </h4>
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <p>
            <b>All Rise</b> is a courthouse drama that follows the chaotic,
            hopeful and sometimes absurd lives of its judges, prosecutors and
            public defenders, as they work with bailiffs, clerks and cops to get
            justice for the people of Los Angeles amidst a flawed legal process.
            Among them is newly appointed Judge Lola Carmichael, a highly
            regarded and impressive deputy district attorney who doesn't intend
            to sit back on the bench in her new role, but instead leans in,
            immediately pushing the boundaries and challenging the expectations
            of what a judge can be.
          </p>
        </div>
        <div className="btn book_btn">
          <button>Book It</button>
        </div>
      </div>
    </div>
  );
};

export default BookMovie;
