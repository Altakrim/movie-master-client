

import { useContext } from "react";
import { Link, useNavigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Loader";
const icon = './public/icon_star.png'

const MovieDetails = () => {
  const movie = useLoaderData(); 
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (!movie) return <Loader />;

  // Check if logged-in user is the owner
  const isOwner = user?.email === movie?.addedBy;

  // Delete function
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this movie?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/movies/${movie._id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete movie");

      alert(" Movie deleted successfully!");
      navigate("/movies"); 
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      
      <img
        src={movie.banner}
        alt={movie.title}
        className="w-full h-80 object-cover rounded-xl shadow"
      />

     
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-60 rounded-xl shadow"
        />

        <div className="space-y-2">
          <h2 className="text-4xl font-bold">{movie.title}</h2>
          <p className="text-lg text-gray-700">{movie.description}</p>

          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Rating:</strong> <img src={icon} alt="" className="w-4" /> {movie.rating}/10</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Cast:</strong> {movie.cast}</p>
          <p><strong>Duration:</strong> {movie.duration} min</p>
          <p><strong>Language:</strong> {movie.language}</p>
          <p><strong>Country:</strong> {movie.country}</p>
          <p><strong>Added By:</strong> {movie.addedBy}</p>
          <p><strong>Created At:</strong> {new Date(movie.createdAt).toLocaleString()}</p>
        </div>
      </div>
      {isOwner  && (
        <div className="flex gap-4 mt-4">
          <Link to={`/update-movie/${movie._id}`}>
            <button className="btn btn-warning">Edit</button>
          </Link>

          <button onClick={handleDelete} className="btn btn-error">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
