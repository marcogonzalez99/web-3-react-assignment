// Import React
import React from 'react';
import SingleMovieList from './SingleMovieList';
const DefaultViewFav = props => {
    return (
     <div>
        <h1 className='text-3xl font-bold text-center pt-5'>Favourites List</h1>
        {props.favourited.map( (m,index) => 
        <div key={index}>{m.title}</div>)
        }
     </div> 

    )
}

export default DefaultViewFav;