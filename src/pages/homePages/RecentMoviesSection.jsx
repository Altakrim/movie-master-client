import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RecentMoviesSection = () => {
     const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies/recent")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log("Recent Movies Error:", err));
  }, []);
    return (
      <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">Recently Added Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="bg-base-200 p-3 rounded-lg shadow-lg"
          >
            <img
              className="rounded-md w-full h-40 object-cover"
              src={movie.poster}
              alt={movie.title}
            />

            <h3 className="font-semibold mt-2">{movie.title}</h3>

            <p className="text-sm">
              ⭐ {movie.rating}
            </p>
             <p className="text-xs mt-2 text-gray-400">
                Added: {new Date(movie.createdAt).toLocaleDateString()}
              </p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default RecentMoviesSection;

