import React from 'react';
import heart from '../add_to_fav.png';

const SingleMovieList = props => {

    const imgURL = `https://image.tmdb.org/t/p/w92${props.movie.poster}`;
    const year = props.movie.release_date.slice(0,4);
    return (
        <tr className='border-t-4 border-b-4'>
            <td className='text-sm p-10'><img src={imgURL} alt={props.movie.title}></img></td>
            <td className='text-2xl w-1/6'>{props.movie.title}</td>
            <td className='text-2xl text-center'>{year}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.average}</td>
            <td className='text-2xl text-center'>{props.movie.ratings.count}</td>
            <td className='text-2xl'><img className='w-8 h-8' src={heart} alt={props.movie.title}></img></td>
            <td className='text-2xl'><button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded-md hover:bg-sky-700'>View</button></td>
        </tr>
    );
}


 
export default SingleMovieList;