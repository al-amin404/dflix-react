import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY} `,
  },
};

const SwiperSlider = () => {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/trending/movie/week?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to get response");
      }
      const data = await response.json();

      console.log(data);

      if (data.Response === "False") {
        console.error("Fetch data error");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      console.log("Trending Movies fetched successfully:");
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={5}
        className="mySwiper moviegrid"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
      >
        {movieList.map((movie) => (
          <SwiperSlide key={movie.id} style={{ width: "auto" }}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
