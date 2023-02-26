import React, { useState} from 'react';
import { Link } from 'react-router-dom';
// import heart from '../add_to_fav.png';
import Modal from 'react-modal';

// For the stars rating
// import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const SingleMovieDetailsView = (props) => {

    // Get the average rating from the movie object
    //const rating = (props.movie.ratings.average/2).toFixed(1);
    // Calculate the number of full stars to display
    //const fullStars = Math.floor(rating);
    // Calculate the number of half stars to display
    //const halfStars = Math.round((rating - fullStars) * 2) / 2;
    // Create an array of empty stars to fill in the remaining space
    //const emptyStars = 5 - fullStars - halfStars;

    // For the Modal settings, to see if we should be opening or closing the Modal popup
    const [isOpen, setIsOpen] = useState(false);

    // To Handle the user rating the movie
    const [userRating, setUserRating] = useState(0);

    // To Handle adding to fav Snackbar
    const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);

    // Opens a snackbar and keeps it showing for 3 seconds
    const handleSnackBarClick = () => {
        setSnackBarIsOpen(true);
        setTimeout(() => setSnackBarIsOpen(false), 3000);
    }

    const handleRating = (newRating) => {
        setUserRating(newRating);
    };

    // This sets the Modal to true, which displays the Popup image
    const openModal = () => {
        setIsOpen(true);
    }

    // This sets the Modal to false, which hides the display of the popup Image
    const closeModal = () => {
        setIsOpen(false);
    }

    // Handles all the variables to make things a bit cleaner and better to read
    const imgURL = `https://image.tmdb.org/t/p/w342${props.movie.poster}`;
    const imgURLModal = `https://image.tmdb.org/t/p/w500${props.movie.poster}`;
    const TMDB = `https://www.themoviedb.org/movie/${props.movie.tmdb_id}`;
    const IMDB = `https://www.imdb.com/title/${props.movie.imdb_id}`;
    // Converts so the strings have commas
    const revenueToString = props.movie.revenue.toLocaleString();
    const ratingsToString = props.movie.ratings.count.toLocaleString();

    return (
        <div className="flex h-screen">
            {/* A third of the screen for the poster image, which comes with a Modal function if the image is clicked */}
            <div className="w-1/3 h-full p-2 bg-gray-200">
                <h1 className='pl-10 text-4xl font-bold pt-5'>{props.movie.title}</h1>
                <img className='pl-10 pt-5 hover:cursor-pointer' src={imgURL} alt={props.movie.title} onClick={openModal}></img>
                {/* When the user clicks on the poster image, a larger view of it will pop up, which can be closed by the user */}
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
            {/* A third of the screen will contain information about the movie, such as details, reviews and a star rating */}
            <div className="w-1/3 px-4 pt-4 bg-gray-300">
                {/* This will handle the first view for the basic movie information */}
                <div className="bg-gray-200 p-4 rounded-lg">
                    {/* Box for release date */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Release Date:</span>
                        <span>{props.movie.release_date}</span>
                    </div>
                    {/* Box for Runtime */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Runtime:</span>
                        <span>{props.movie.runtime} Minutes</span>
                    </div>
                    {/* Box for Tagline */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Tagline:</span>
                        <span>{props.movie.tagline}</span>
                    </div>
                    {/* Box for Revenue */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Revenue:</span>
                        <span>${revenueToString}</span>
                    </div>
                    {/* Box for Genres */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Genres:</span>
                        <span>
                            <ul>
                                {props.movie.details.genres.map(genres => <span key={genres.id}>{genres.name} - </span>)}
                            </ul>
                        </span>
                    </div>
                </div>

                {/* Box for the TMDB and IMDB links */}
                <div className="bg-gray-200 p-4 rounded-lg my-4">
                    <a className='text-blue-600 text-xl underline' href={IMDB} target="_blank" rel="noopener noreferrer">IMDB Link</a><br></br>
                    <a className='text-blue-600 text-xl underline' href={TMDB} target="_blank" rel="noopener noreferrer">TMDB Link</a>
                </div>

                {/* Box for the movie Overview */}
                <div className="bg-gray-200 p-4 rounded-lg my-4">
                    <h2 className="text-lg font-bold mb-4">Overview</h2>
                    <p>{props.movie.details.overview}</p>
                </div>

                {/* Box for the ratings of the movie */}
                <div className="bg-gray-200 p-4 rounded-lg mt-1">
                    <h2 className="text-lg font-bold mb-4">Ratings</h2>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Popularity:</span>
                        <span className="text-gray-900">{Math.floor(props.movie.ratings.popularity)}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Average:</span>
                        <span className="text-gray-900">{props.movie.ratings.average/2} Stars</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Count:</span>
                        <span className="text-gray-900">{ratingsToString} Reviews</span>
                    </div>
                </div>
                {/* Box for the star rating, this was retrieved from https://dev.to/michaelburrows/create-a-custom-react-star-rating-component-5o6 */}
                <div className="flex items-center mt-5">
                    <span className="text-2xl font-bold mr-2 text-gray-700">Rating:</span>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`h-10 w-10 ${
                            index < Math.floor(props.movie.ratings.average/2) ? "text-[#3aafa9]" : "text-black-300"
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
                        {/* <div className="flex">
                        {[...Array(fullStars)].map((_, i) => (
                            <FaStar key={i} className="h-10 w-10 text-[#3aafa9]" />
                        ))}
                        {[...Array(halfStars > 0 ? 1 : 0)].map((_, i) => (
                            <FaStarHalfAlt key={i} className="h-10 w-10 text-[#3aafa9]" />
                        ))}
                        {[...Array(emptyStars)].map((_, i) => (
                            <FaRegStar key={i} className="h-10 w-10 text-[#3aafa9]" />
                        ))}
                        </div> */}
                    </div>
                    <span className="ml-2 text-2xl text-gray-700">{props.movie.ratings.average/2} Stars - ({ratingsToString} ratings)</span>
                </div>
            </div>
            {/* A third of the screen to Add to favourites, to close, and for the user to place their own rating for the movie */}
            <div className="w-1/3 p-4 bg-gray-200">
                <div onClick={() => {
                    props.updateFavourites(props.movie.id, 1);
                    // Snackbar for adding to favourites will pop up when the user clicks the button to do so
                    handleSnackBarClick();
                    }} className="flex items-center text-white text-xl bg-[#3aafa9] mt-5 px-4 py-2 rounded-md hover:bg-sky-700 w-72 cursor-pointer ">
                    {
                        snackBarIsOpen && (
                        <div className="bg-gray-800 text-white py-5 px-10 rounded-md shadow-md mt-4 absolute top-[425px] right-[350px]">
                            <span className="block font-bold mb-2">{props.movie.title}</span>
                            <span> is in your Favourites</span>
                        </div>
                    )}
                    {/* <img className='w-11 h-10 ' src={heart} alt={props.movie.title}></img> */}
                    <h1 className='text-2xl ml-4'>Add To Favourites</h1>
                </div>
                {/* Simple link to return back to the browse page */}
                <Link to="/browse">
                    <button className='text-white text-xl bg-[#3aafa9] mt-5 px-5 py-2 rounded-md hover:bg-sky-700'>Close</button>
                </Link>
                {/* Box for the user to place their own rating, contains 5 ★ icons that are either, black or filled, depending on how many stars have been clicked */}
                <div className='mt-5 p-4 bg-gray-300 rounded-sm'>
                    <p className="text-lg font-bold mb-4">Rate this product:</p>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((value) => (
                        <button
                            key={value}
                            // each button is assigned a value, and depending on the value, said value will determine how many starts are filled or not
                            className={`text-6xl ${
                            userRating >= value ? "text-[#3aafa9]" : "text-black-400"
                            }`}
                            onClick={() => handleRating(value)}
                        >
                            ★
                        </button>
                        ))}
                    </div>
                    {/* A check to see if the user has rated the movie or not, takes the userRating and checks if its greater than zero */}
                    <p className="mt-2">
                        {userRating > 0
                        ? `You have rated this product ${userRating} out of 5 stars.`
                        : "Please rate this product."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovieDetailsView;