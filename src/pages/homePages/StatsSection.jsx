import React, { useEffect, useState } from "react";
import axios from "axios";

const StatisticsSection = () => {
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    // Fetch Total Movies from TMDB
    const fetchMoviesCount = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        setTotalMovies(res.data.total_results);
      } catch (error) {
        console.log("Movie Count Error:", error);
      }
    };

    // Fetch Total Users from your backend
    const fetchUsersCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/count");

        setTotalUsers(res.data.total_users);
      } catch (error) {
        console.log("User Count Error:", error);
      }
    };

    fetchMoviesCount();
    fetchUsersCount();
  }, []);

  return (
    <div className="w-full py-10 bg-base-200 rounded-xl my-6">
      <div className="flex justify-center gap-20 text-center">
        
        {/* Total Movies */}
        <div>
          <h2 className="text-4xl font-bold">{totalMovies}</h2>
          <p className="text-lg font-medium">Total Movies</p>
        </div>

        {/* Total Users */}
        <div>
          <h2 className="text-4xl font-bold">{totalUsers}</h2>
          <p className="text-lg font-medium">Total Users</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
