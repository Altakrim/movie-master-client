import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getTopRatedMovies = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );

    
    return res.data.results.slice(0, 5);
  } catch (error) {
    console.error("Top Rated Movies Fetch Error:", error);
    return[];
  }
};


