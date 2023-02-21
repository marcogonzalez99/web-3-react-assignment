import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import heart from '../add_to_fav.png';
import Modal from 'react-modal';

const SingleMovieDetailsView = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    const imgURL = `https://image.tmdb.org/t/p/w342${props.movie.poster}`;
    const imgURLModal = `https://image.tmdb.org/t/p/w500${props.movie.poster}`;
    const TMDB = `https://www.themoviedb.org/movie/${props.movie.tmdb_id}`;
    const IMDB = `https://www.imdb.com/title/${props.movie.imdb_id}`;
    const revenueToString = props.movie.revenue.toLocaleString();
    return (
        <div className="flex h-screen">
            <div className="w-1/3 h-full p-2 bg-gray-200">
                <h1 className='pl-10 text-4xl font-bold pt-5'>{props.movie.title}</h1>
                <img className='pl-10 pt-5' src={imgURL} alt={props.movie.title} onMouseEnter={openModal}></img>
                <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    content:{
                        width: '50%',
                        height: '90%',
                        margin: 'auto'
                    }
                }}>
                    <img className='pl-10 pt-5 m-auto' src={imgURLModal} alt={props.movie.title}></img>
                    <button className='absolute bottom-5 left-5 text-xl text-white bg-[#3aafa9] mx-2 px-5 rounded hover:bg-sky-700' onClick={closeModal}>Close Modal</button>
                </Modal>
            </div>
            <div className="w-1/3 px-4 pt-4 bg-gray-300">
                {/* This will handle the first view for the basic movie information */}
                <div className="bg-gray-200 p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Release Date:</span>
                        <span>{props.movie.release_date}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Runtime:</span>
                        <span>{props.movie.runtime} Minutes</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Tagline:</span>
                        <span>{props.movie.tagline}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Revenue:</span>
                        <span>${revenueToString}</span>
                    </div>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg my-4">
                    <a className='text-blue-600 text-xl underline' href={IMDB} target="_blank" rel="noopener noreferrer">IMDB Link</a><br></br>
                    <a className='text-blue-600 text-xl underline' href={TMDB} target="_blank" rel="noopener noreferrer">TMDB Link</a>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg my-4">
                    <h2 className="text-lg font-bold mb-4">Overview</h2>
                    <p>{props.movie.details.overview}</p>
                </div>

                <div className="bg-gray-200 p-4 rounded-lg mt-1">
                    <h2 className="text-lg font-bold mb-4">Ratings</h2>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Popularity:</span>
                        <span className="text-gray-900">{props.movie.ratings.popularity}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Average:</span>
                        <span className="text-gray-900">{props.movie.ratings.average} Stars</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Count:</span>
                        <span className="text-gray-900">{props.movie.ratings.count} Reviews</span>
                    </div>
                </div>
                <div className="flex items-center mt-5">
                    <span className="text-2xl font-bold mr-2 text-gray-700">Rating:</span>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`h-10 w-10 ${
                            index < Math.floor(props.movie.ratings.average/2) ? "text-green-500" : "text-black-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                            fillRule="evenodd"
                            d="M10 14.472l-4.183 2.28.798-4.655L3.11 8.527l4.65-.677L10 3.915l2.24 4.935 4.65.677-3.505 3.57.798 4.655L10 14.472z"
                            clipRule="evenodd"
                            />
                        </svg>
                        ))}
                    </div>
                    <span className="ml-2 text-2xl text-gray-700">{props.movie.ratings.average} ({props.movie.ratings.count} ratings)</span>
                </div>
            </div>
            <div className="w-1/3 p-4 bg-gray-200">
                <div className="flex items-center text-white text-xl bg-[#3aafa9] mt-5 px-4 py-2 rounded-md hover:bg-sky-700 w-72 cursor-pointer ">
                    <img className='w-11 h-10 ' src={heart} alt={props.movie.title}></img>
                    <h1 className='text-2xl ml-4'>Add To Favourites</h1>
                </div>
                <Link to="/browse">
                    <button className='text-white text-xl bg-[#3aafa9] mt-5 px-5 py-2 rounded-md hover:bg-sky-700'>Close</button>
                </Link>
            </div>
        </div>
    );
}

export default SingleMovieDetailsView;