import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BookPage from "./components/BookPage";
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Navbar />; */
}
{
  /* <AboutMovie /> */
}
{
  /* <div className="movie_Container">{dataComp}</div>; */
}
export default App;
