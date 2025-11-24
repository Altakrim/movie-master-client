
import { Drama, Film, Ghost, Heart, Laugh, Sparkles, Sword } from 'lucide-react';
import React from 'react';



const genres = [
  { name: "Action", icon: <Sword size={28} /> },
  { name: "Drama", icon: <Drama size={28} /> },
  { name: "Comedy", icon: <Laugh size={28} /> },
  { name: "Sci-Fi", icon: <Sparkles size={28} /> },
  { name: "Horror", icon: <Ghost size={28} /> },
  { name: "Romance", icon: <Heart size={28} /> },
  { name: "Adventure", icon: <Film size={28} /> },
];
const GenreSection = () => {
    return (
        <div className="my-16 px-6">
       <h2 className="text-3xl font-bold text-white mb-8">
      Browse by Genre
      </h2>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 text-white p-5 rounded-xl cursor-pointer hover:bg-gray-700 hover:scale-105 transition"
          >
            <div className="mb-3 text-yellow-400">{genre.icon}</div>
            <p className="text-lg font-medium">{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
    );
};

export default GenreSection;




