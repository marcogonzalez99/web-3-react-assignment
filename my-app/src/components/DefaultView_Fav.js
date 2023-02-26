// Import React
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
const DefaultViewFav = props => {
    
    // Importing a w92 poster image for each item in the Favourites list
    const imgURL = `https://image.tmdb.org/t/p/w92`
    // Hover state to detect if we should be showing the 'x' or not
    const [hover, setHover] = useState(false);

    // Handlers for when the mouse enters the box for the fav item
    const handleMouseEnter = () => {
        setHover(true);
    };
    
    const handleMouseLeave = () => {
        setHover(false);
    };


    return (
     <div className='h-screen overflow-y-scroll'>
        <h1 className='text-3xl font-bold text-center pt-5 mb-5'>Favourites List</h1>
        {/* Loops through each element and creates a Div block to display all needed information */}
        {props.favourited.map( (m,index) => 
        
        <div key={index}>
            <div className='px-4 py-3 my-3 mx-3 flex items-center bg-gray-300 rounded relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>
                    {/* Links to the single view when the user clicks the poster image */}
                    <Link to='/singleView'>
                        <img onClick={() => props.handleSelectMovie(m.id)}className='relative inline-block' src={`${imgURL}${m.poster}`} alt={m.title} ></img>
                    </Link>
                    {/* when the user is hovering over the block, a button will pop up on the corner of the block inidcating a remove button */}
                    {hover && (
                        <button onClick ={() =>{
                            props.updateFavourites(m.id, 0);
                            props.setNewFavourite();
                         }} className="absolute top-0 right-0 p-2 text-black rounded-full">
                        X
                        </button>
                    )}
                </span>
                <span className='text-xl font-bold px-2'><h1>{m.title}</h1></span>
            </div>
            
        </div>
        )}
     </div> 

    )
}

export default DefaultViewFav;