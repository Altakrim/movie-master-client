
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddMovie = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const movieData = {
      title: form.title.value,
      description: form.description.value,
      poster: form.poster.value,
      banner: form.banner.value,
      genre: form.genre.value,
      rating: Number(form.rating.value),
      releaseYear: Number(form.releaseYear.value),
      director: form.director.value,
      cast: form.cast.value,
      duration: Number(form.duration.value),
      language: form.language.value,
      country: form.country.value,
      addedBy: user?.email, 
    };

    try {
      const res = await fetch("https://movie-master-server-ebon.vercel.app/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieData),
      });

      if (!res.ok) throw new Error("Failed to add movie");

      alert("Movie added successfully!");
      form.reset();
      navigate("/dashboard/my-movies");
      console.error();
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Movie</h1>

      <form
        onSubmit={handleAddMovie}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200 p-8 rounded-lg shadow"
      >
        <div>
          <label className="label font-semibold">Title</label>
          <input type="text" name="title" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Poster URL</label>
          <input type="text" name="poster" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Banner URL</label>
          <input type="text" name="banner" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Genre</label>
          <select name="genre" className="select select-bordered w-full" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <div>
          <label className="label font-semibold">Rating (0-10)</label>
          <input type="number" name="rating" min="0" max="10" step="0.1" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Release Year</label>
          <input type="number" name="releaseYear" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Director</label>
          <input type="text" name="director" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Cast</label>
          <input type="text" name="cast" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Duration (minutes)</label>
          <input type="number" name="duration" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Language</label>
          <input type="text" name="language" className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Country</label>
          <input type="text" name="country" className="input input-bordered w-full" required />
        </div>

        <div className="md:col-span-2">
          <label className="label font-semibold">Description</label>
          <textarea name="description" className="textarea textarea-bordered w-full" required />
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={loading} className="btn btn-primary w-full mt-4">
            {loading ? "Saving..." : "Add Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
