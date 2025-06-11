import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";
import Nav from "./components/nav";
import MovieCard from "./components/MovieCard";
import SwiperSlider from "./components/SwiperSlider";
import { useState, useEffect } from "react";


const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY} `
  },
};


function App() {

  const [movieList, setMovieList] = useState([]);


  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      const data = await response.json();

      console.log(data.results);

      if (data.Response === 'False') {
        console.error("Fetch data error");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      console.log("Movies fetched successfully:");

    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

useEffect(() => {
  fetchMovies();
}, []);

  return (
    <>
      <Nav />
      <div className="trending-movies">
        <h2 className="fs-4 text-start text-light fw-semibold mb-3">Trending this week</h2>
        <SwiperSlider />
      </div>
      <div
        className="container-lg mt-5 py-5"
        style={{ backgroundColor: "#f3f3f32b", borderRadius: "20px" }}
      >
        <div
          id="moviegrid"
          className="row justify-content-center gap-4 moviegrid"
        >
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
