// Import React
import React from 'react';
//import HeaderApp from './HeaderApp';
import SingleMovieList from './SingleMovieList';
const DefaultViewList = props => {
    
    return (
        <div className='center overflow-y-scroll h-screen'>
            {/* Header for the movie list section */}
            <div className='text-3xl font-bold text-center pt-5 mb-3'>Movie List</div>
            {/* Table to display a movie list with information about each movie */}
            <table className='table-auto'>
                {/* Header for the movie list, contains Title, Year, Rating and Popularity. I also added in empty TH tags for Poster image, heart and view button */}
                <thead className='text-2xl'>
                    <tr>
                        <th></th>
                        <th className='pr-72 hover:cursor-pointer' onClick={() => {props.updateSort("Title");}}>Title</th>
                        <th className='px-5 hover:cursor-pointer' onClick={() => {props.updateSort("Year");}}>Year</th>
                        <th className='px-5 hover:cursor-pointer' onClick={() => {props.updateSort("Rating");}}>Rating</th>
                        <th className='px-5 hover:cursor-pointer' onClick={() => {props.updateSort("Popularity");}}>Popularity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {/* In the body, each element will be a row of SingleMovieList, which brings in movie information as well as some functions */}
                <tbody>
                    {props.movies.map( (m,index) => <SingleMovieList handleSelectMovie={props.handleSelectMovie} movie={m} setNewFavourite = {props.setNewFavourite} updateFavourites={props.updateFavourites} key={index}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultViewList;