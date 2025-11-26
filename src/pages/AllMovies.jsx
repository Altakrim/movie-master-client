
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const icon = '/public/icon_star.png'

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">All Movies</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="bg-base-100 shadow rounded-xl overflow-hidden"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="text-lg font-semibold">{movie.title}</h3>

              <p className="text-sm text-gray-500">
                Genre: {movie.genre || "N/A"}
              </p>

              <p className="text-sm text-gray-500">
                Release Year: {movie.releaseYear || "Unknown"}
              </p>

              <p className="font-medium">
                <img src={icon} alt="" className="w-4" /> {movie.rating || "N/A"}/10
              </p>

              <Link to={`/movies/${movie._id}`}>
                <button className="btn btn-primary w-full mt-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
