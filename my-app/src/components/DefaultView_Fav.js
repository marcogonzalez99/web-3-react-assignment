// Import React
import React, { useState} from 'react';
const DefaultViewFav = props => {
    const imgURL = `https://image.tmdb.org/t/p/w92`
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    
    const handleMouseLeave = () => {
        setHover(false);
    };


    return (
     <div className='h-screen overflow-y-scroll'>
        <h1 className='text-3xl font-bold text-center pt-5 mb-5'>Favourites List</h1>
        {props.favourited.map( (m,index) => 
        
        <div key={index}>
            <div className='px-4 py-3 my-3 mx-3 flex items-center bg-gray-300 rounded relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>
                    <img className='relative inline-block' src={`${imgURL}${m.poster}`} alt={m.title} ></img>
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