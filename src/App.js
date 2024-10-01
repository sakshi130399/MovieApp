import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Use element instead of component */}
            <Route path="/movie/:imdbID" element={<MovieDetail />} /> {/* Use element */}
            <Route path="*" element={<PageNotFound />} /> {/* For 404, use path="*" */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

