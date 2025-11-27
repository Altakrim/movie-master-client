import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const MyMovies = () => {
  const { user, loading } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchMovies = async () => {
      try {
        const res = await fetch("https://movie-master-server-ebon.vercel.app/movies");
        const data = await res.json();

        const userMovies = data.filter((movie) => movie.addedBy === user.email);
        setMovies(userMovies);
      } catch (err) {
        console.error(err);
      } finally {
        setFetching(false);
      }
    };

    fetchMovies();
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://movie-master-server-ebon.vercel.app/movies/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete movie");

      setMovies((prev) => prev.filter((movie) => movie._id !== id));
      alert("Movie deleted!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  if (loading || fetching)
    return <p className="text-center mt-10">Loading your movies...</p>;

  if (movies.length === 0)
    return <p className="text-center mt-10">No movies added yet!</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-6">My Movie Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="card bg-base-200 shadow rounded-lg p-4"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-60 object-cover rounded-lg mb-3"
            />

            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="text-gray-700 mb-2">
              {movie.genre} | ⭐ {movie.rating}
            </p>
            <p className="text-gray-500 mb-4">{movie.releaseYear}</p>

            <div className="flex gap-2">
              <Link to={`/update-movie/${movie._id}`}>
                <button className="btn btn-warning btn-sm w-full">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(movie._id)}
                className="btn btn-error btn-sm w-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMovies;
