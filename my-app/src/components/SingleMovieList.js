import React, { useState } from 'react';
import heart from '../add_to_fav.png';
import { Link } from 'react-router-dom';


const SingleMovieList = props => {

    // This creates a poster image for every movie,
    const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;
    // Slicing the release_date to only have the year of the movie
    const year = props.movie.release_date.slice(0,4);
    // Creating a state for the Snackbar icon, this idea was grabbed from Lab 10
    const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);

    const handleSnackBarClick = () => {
        setSnackBarIsOpen(true);
        setTimeout(() => setSnackBarIsOpen(false), 3000);
    }
    
    return (
        <tr className='border-t-4 border-b-4'>
            <td className='text-sm p-10'><img src={imgURL} alt={props.movie.title}></img></td>
            <td className='text-2xl w-1'>{props.movie.title}</td>
            <td className='text-2xl text-center'>{year}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.average}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.count}</td>
            <div className='relative top-[86px] right-2 rounded bg-[#3aafa9] pt-2 px-2'>
                <td className='text-2xl '><button onClick={() => 
                    { 
                        props.updateFavourites(props.movie.id, 1);
                        props.setNewFavourite();
                        handleSnackBarClick();
                    }}><img className='w-10 h-8 ' src={heart} alt={props.movie.title}></img></button></td>
                {
                    snackBarIsOpen && (
                        <div className="bg-gray-800 text-white py-5 px-10 rounded-md shadow-md mt-4 fixed top-[100px] right-1/2">
                            <span className="block font-bold mb-2">{props.movie.title}</span>
                            <span> is in your Favourites</span>
                        </div>
                )}
            </div>
            
            <td className='text-2xl text-white'>
                <Link to="/singleView">
                    <button onClick={() => {props.handleSelectMovie(props.movie.id);}}className='text-xl bg-[#3aafa9] ml-3 mr-3 px-3 py-2 rounded-md hover:bg-sky-700'>
                        View
                    </button>
                </Link>
            </td>
        </tr>
    );
}


 
export default SingleMovieList;