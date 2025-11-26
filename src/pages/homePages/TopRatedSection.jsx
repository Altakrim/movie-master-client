import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../API/TMDB";
const icon = '/public/icon_star.png'

const TopRatedSection = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies().then((data) => setTopMovies(data));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Top Rated Movies</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {topMovies.map((movie) => (
          <div key={movie.id} className="bg-gray-900 p-2 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded"
            />
            <h3 className="text-sm mt-2">{movie.title}</h3>
            <span className="flex items-center gap-2">
               <img src={icon} alt="" className="w-4"/>
              <p className="text-yellow-400 text-sm"> {movie.vote_average}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSection;
