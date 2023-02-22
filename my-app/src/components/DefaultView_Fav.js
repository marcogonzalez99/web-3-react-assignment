// Import React
import React from 'react';
const DefaultViewFav = props => {
    const imgURL = `https://image.tmdb.org/t/p/w92`
    return (
     <div className='h-screen overflow-y-scroll'>
        <h1 className='text-3xl font-bold text-center pt-5 mb-5'>Favourites List</h1>
        {props.favourited.map( (m,index) => 
        
        <div key={index}>
            <div className='px-4 py-3 my-3 mx-3 flex items-center bg-gray-300 rounded'>
                <span><img src={`${imgURL}${m.poster}`} alt={m.title}></img></span>
                <span className='text-xl font-bold px-2'><h1>{m.title}</h1></span>
            </div>
            
        </div>
        )}
     </div> 

    )
}

export default DefaultViewFav;