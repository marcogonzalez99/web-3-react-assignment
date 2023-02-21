import React from 'react';
import heart from '../add_to_fav.png';
import { Link } from 'react-router-dom';

const SingleMovieList = props => {

    const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;
    const year = props.movie.release_date.slice(0,4);
    
    return (
        <tr className='border-t-4 border-b-4'>
            <td className='text-sm p-10'><img src={imgURL} alt={props.movie.title}></img></td>
            <td className='text-2xl w-1'>{props.movie.title}</td>
            <td className='text-2xl text-center'>{year}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.average}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.count}</td>
            <td className='text-2xl'><img className='w-9 h-8' src={heart} alt={props.movie.title}></img></td>
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