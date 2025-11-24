import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddMovie = () => {
    const {user} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const handleAddMovie = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        const newMovie = {
            title: form.title.value,
            poster: form.poster.value,
            genre: form.genre.value,
            rating: form.rating.value,
            duration: form.duration.value,
            email: user?.email,
        };

        console.log("New Movie:", newMovie);

       
        setTimeout(() => {
            alert("Movie added (Temp text only");
            form.reset();
            setLoading(false);
        }, 1000);
    };
    return (
        <div className='p-10'>
            <h1 className="text-3x1 font-bold mb-6">Add New Movie</h1>

            <form onSubmit={handleAddMovie} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-base-200 p-8 rounded-lg shadow">
                {/* Title  */}
                <div>
                    <label htmlFor="title" className="label font-semibold">Movie Title</label>
                    <input type="text"
                     name='title'
                     className='input input-bordered w-full'
                     required />
                </div>

                {/* Poster URL  */}
                <div>
                    <label htmlFor="poster" className="label font-semibold">Poster URL</label>
                    <input type="text"
                     name='poster'
                     className='input input-bordered w-full'
                     required />

                     {/* Genre  */}
                     <div>
                        <label htmlFor="" className="label font-semibold">Genre</label>
                        <select name="genre" id="" className="select select-bordered w-full">
                            <option value="">Action</option>
                            <option value="">Drama</option>
                            <option value="">Comedy</option>
                            <option value="">Horror</option>
                            <option value="">Romance</option>
                            <option value="">Thriller</option>
                        </select>
                     </div>

                     {/* Rating  */}
                     <div>
                        <label htmlFor="" className="label font-semibold">Rating (0 - 10)</label>
                        <input type="number"
                         name='rating'
                         min="0" 
                         max="10"
                         step="0.1" 
                         className='input input-bordered w-full'
                         required/>
                     </div>

                     {/* Duration  */}
                     <div>
                        <label htmlFor="duration" className="label font-semibold">Duration (Minutes)</label>
                        <input type="number" 
                         name='duration'
                         className='input input-bordered w-full' 
                         required/>
                     </div>

                     {/* Submit  */}
                     <div className='md:col-span-2'>
                        <button disabled={loading}
                         type='submit' 
                         className="btn btn-primary w-full mt-4">
                            {loading ? "saving..." : "Add Movie"}
                         </button>

                     </div>
                </div>
            </form>
           
        </div>
    );
};

export default AddMovie;