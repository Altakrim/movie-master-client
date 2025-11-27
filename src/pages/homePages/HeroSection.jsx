import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAsterisk } from "react-icons/fa";
export const img = "./public/icon_star.png"

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
        );

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
            
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full object-cover"
              alt={movie.title}
            />

            <div className="absolute left-0 top-0 w-full h-full bg-black/40"></div>

           
            <div className="absolute left-10 top-1/3 text-white max-w-xl">
              <h2 className="text-4xl font-bold">{movie.title}</h2>
              <p className="py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 5 C 2.2545455 5 0 7.2545455 0 10 L 0 39 C 0 41.745455 2.2545455 44 5 44 L 21 44 C 22.654545 44 24 45.345455 24 47 A 1.0001 1.0001 0 0 0 24.005859 47.099609 A 1.0001 1.0001 0 0 0 24.023438 47.199219 A 1.0001 1.0001 0 0 0 24.048828 47.294922 A 1.0001 1.0001 0 0 0 24.083984 47.388672 A 1.0001 1.0001 0 0 0 24.128906 47.478516 A 1.0001 1.0001 0 0 0 24.244141 47.640625 A 1.0001 1.0001 0 0 0 24.470703 47.835938 A 1.0001 1.0001 0 0 0 24.84375 47.974609 A 1.0001 1.0001 0 0 0 25.042969 47.984375 A 1.0001 1.0001 0 0 0 25.517578 47.841797 A 1.0001 1.0001 0 0 0 25.599609 47.785156 A 1.0001 1.0001 0 0 0 25.746094 47.650391 A 1.0001 1.0001 0 0 0 25.910156 47.400391 A 1.0001 1.0001 0 0 0 25.947266 47.306641 A 1.0001 1.0001 0 0 0 25.974609 47.210938 A 1.0001 1.0001 0 0 0 25.992188 47.113281 A 1.0001 1.0001 0 0 0 26 47 C 26 45.345455 27.345455 44 29 44 L 45 44 C 47.745455 44 50 41.745455 50 39 L 50 10 C 50 7.2545455 47.745455 5 45 5 L 29 5 C 27.327085 5 25.909357 5.8908265 25 7.1660156 C 24.090643 5.8908265 22.672915 5 21 5 L 5 5 z M 5 7 L 21 7 C 22.654545 7 24 8.3454545 24 10 L 24 43.113281 C 23.153926 42.457562 22.144393 42 21 42 L 5 42 C 3.3454545 42 2 40.654545 2 39 L 2 10 C 2 8.3454545 3.3454545 7 5 7 z M 29 7 L 45 7 C 46.654545 7 48 8.3454545 48 10 L 48 39 C 48 40.654545 46.654545 42 45 42 L 29 42 C 27.855607 42 26.846074 42.457562 26 43.113281 L 26 10 C 26 8.3454545 27.345455 7 29 7 z"></path>
                </svg>{" "}
                 {movie.overview?.slice(0, 120)}...
              </p>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 px-3 py-1 bg-yellow-500 rounded-lg">
                <img src={img} alt="" className="w-4"/> {movie.vote_average}
                </span>

                <button className="btn btn-primary px-6">Watch Now</button>
              </div>
            </div>

          
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? movies.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                (
              </a>
              <a
                href={`#slide${index === movies.length - 1 ? 0 : index + 1}`}
                className="btn btn-circle"
              >
                )  
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
