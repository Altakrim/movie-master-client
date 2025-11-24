import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
        );

        // movie list set
        setMovies(res.data.results);
      } catch (error) {
        console.error("TMDB API Error:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full">
      <div className="carousel w-full h-[450px] rounded-xl overflow-hidden">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            {/* Background Image */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full object-cover"
              alt={movie.title}
            />

            {/* Overlay */}
            <div className="absolute left-0 top-0 w-full h-full bg-black/40"></div>

            {/* Text */}
            <div className="absolute left-10 top-1/3 text-white max-w-xl">
              <h2 className="text-4xl font-bold">{movie.title}</h2>
              <p className="py-4">
                {movie.overview?.slice(0, 120)}...
              </p>

              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-yellow-500 rounded-full">
                  ⭐ {movie.vote_average}
                </span>

                <button className="btn btn-primary px-6">
                  Watch Now
                </button>
              </div>
            </div>

            {/* Carousel Buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? movies.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === movies.length - 1 ? 0 : index + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
