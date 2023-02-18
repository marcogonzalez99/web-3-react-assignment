import React from 'react';
import heart from '../add_to_fav.png';

const SingleMovieList = props => {

    const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;
    return (
        <tr className=''>
            <td className='text-sm py-10'><img src={imgURL} alt={props.movie.title}></img></td>
            <td className='text-lg text-center'>{props.movie.title}</td>
            <td className='text-lg text-center'>{props.movie.release_date}</td>
            <td className='text-lg text-center'>{props.movie.ratings.average}</td>
            <td className='text-lg text-center'>{props.movie.ratings.count}</td>
            <td className='text-lg'><img className='w-8 h-8' src={heart} alt={props.movie.title}></img></td>
            <td className='text-lg'><button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded-md hover:bg-sky-700'>View</button></td>
        </tr>
    );
}


 
export default SingleMovieList;