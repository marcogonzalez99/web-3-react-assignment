import React from 'react';
import { Link } from 'react-router-dom';

const SingleMovieDetailsView = (props) => {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold pt-5'>Welcome to the Single View of the Movie</h1>
            <h2>{props.movie.title}</h2>
            <Link to="/browse">
                <button className='text-white text-xl bg-[#3aafa9] ml-3 mr-3 px-3 py-2 rounded-md hover:bg-sky-700'>Return</button>
            </Link>

        </div>
    );
}

export default SingleMovieDetailsView;