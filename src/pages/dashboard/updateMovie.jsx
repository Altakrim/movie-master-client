import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMovie = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [saving, setSaving] = useState(false);

  // Fetch movie by ID
  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p>Loading user...</p>;
  if (!movie) return <p>Loading movie data...</p>;

  // Only owner can edit
  if (user?.email !== movie.addedBy) return <p className="text-center mt-10">❌ You are not allowed to edit this movie.</p>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    const form = e.target;

    const updatedData = {
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
      // addedBy is NOT editable
    };

    try {
      const res = await fetch(`http://localhost:5000/movies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error("Failed to update movie");

      alert("✅ Movie updated successfully!");
      navigate("/dashboard/my-movies");

    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Update Movie</h1>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200 p-8 rounded-lg shadow"
      >
        <div>
          <label className="label font-semibold">Title</label>
          <input type="text" name="title" defaultValue={movie.title} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Poster URL</label>
          <input type="text" name="poster" defaultValue={movie.poster} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Banner URL</label>
          <input type="text" name="banner" defaultValue={movie.banner} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Genre</label>
          <select name="genre" defaultValue={movie.genre} className="select select-bordered w-full" required>
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
          <input type="number" name="rating" min="0" max="10" step="0.1" defaultValue={movie.rating} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Release Year</label>
          <input type="number" name="releaseYear" defaultValue={movie.releaseYear} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Director</label>
          <input type="text" name="director" defaultValue={movie.director} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Cast</label>
          <input type="text" name="cast" defaultValue={movie.cast} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Duration (minutes)</label>
          <input type="number" name="duration" defaultValue={movie.duration} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Language</label>
          <input type="text" name="language" defaultValue={movie.language} className="input input-bordered w-full" required />
        </div>

        <div>
          <label className="label font-semibold">Country</label>
          <input type="text" name="country" defaultValue={movie.country} className="input input-bordered w-full" required />
        </div>

        <div className="md:col-span-2">
          <label className="label font-semibold">Description</label>
          <textarea name="description" defaultValue={movie.description} className="textarea textarea-bordered w-full" required />
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={saving} className="btn btn-primary w-full mt-4">
            {saving ? "Saving..." : "Update Movie"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMovie;
