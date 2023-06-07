import React from "react";
import { BiMoviePlay } from "react-icons/bi";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="title">
          <div className="icon">
            <BiMoviePlay className="movie_icon" />
          </div>
          <h1>Book It</h1>
        </div>
        <div className="nav_items">
          <ul className="nav_item">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#movies">Movies</a>
            </li>
          </ul>
          <div className="menu_icon" id="menu">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
