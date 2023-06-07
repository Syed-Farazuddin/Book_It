import { Button, TextField } from "@mui/material";
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
          <p style={{ fontFamily: "Poppins" }}>
            {location.state.data.show.summary}
          </p>
        </div>
        <div className="btn book_btn">
          <button
            onClick={() => {
              const form = document.getElementById("form");
              form.classList.remove("hidden");
            }}
          >
            Book Tickets
          </button>
        </div>
      </div>
      <div className="form hidden" id="form">
        <div className="movie_name">
          <h4>{location.state.data.show.name}</h4>
        </div>

        <form action="">
          <div className="form_items">
            <TextField
              id="outlined-basic"
              className="input_field"
              label="Name"
              variant="outlined"
            />
          </div>
          <div className="form_items">
            <TextField
              className="input_field"
              id="outlined-basic"
              label="Email Adress"
              variant="outlined"
            />
          </div>
          <div className="movie_info">
            <div className="places">
              <div className="place">
                <div className="place_name">
                  <a href="amb">AMB Cinemas: Gachibowli</a>
                </div>
                <div className="movie_timings">
                  <div className="timings">
                    <a href="time" className="time">
                      11:30AM
                    </a>
                  </div>
                  <div className="timings">
                    <a href="time" className="time">
                      2:30PM
                    </a>
                  </div>
                  <div className="timings">
                    <a href="time" className="time">
                      6:00PM
                    </a>
                  </div>
                  <div className="timings">
                    <a href="time" className="time">
                      10:00PM
                    </a>
                  </div>
                </div>
              </div>
              <div className="place">
                <div className="place_name">
                  <a href="amb">PVR Cinemas: Jublihills</a>
                </div>
                <div className="movie_timings">
                  <div className="timings">
                    <a href="time" className="time">
                      11:30AM
                    </a>
                  </div>
                  <div className="timings">
                    <a href="time" className="time">
                      2:30PM
                    </a>
                  </div>
                  <div className="timings">
                    <a href="time" className="time">
                      6:00PM
                    </a>
                  </div>
                </div>
              </div>
              <div className="place">
                <div className="place_name">
                  <a href="amb">Asian Cineplanet Multiplex: Kompally</a>
                </div>
                <div className="movie_timings">
                  <div className="timings">
                    <a href="time" className="time">
                      11:30AM
                    </a>
                  </div>

                  <div className="timings">
                    <a href="time" className="time">
                      10:00PM
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button
              onClick={() => {
                const form = document.getElementById("form");
                form.classList.add("hidden");
              }}
            >
              Book Ticket
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookMovie;
