// Import React
import React from 'react';
//import HeaderApp from './HeaderApp';
import SingleMovieList from './SingleMovieList';
const DefaultViewList = props => {
    
    return (
        <div className='center overflow-y-scroll h-screen'>
            <div className='text-3xl font-bold text-center pt-5 mb-3'>Movie List</div>
            <table className='table-auto'>
                <thead className='text-2xl'>
                    <tr>
                        <th></th>
                        <th className='pr-96 hover:cursor-pointer' onClick={props.updateSort("Title")}>Title</th>
                        <th className='px-5 hover:cursor-pointer' onClick={props.updateSort("Year")}>Year</th>
                        <th className='px-5 hover:cursor-pointer' onClick={props.updateSort("Rating")}>Rating</th>
                        <th className='px-5 hover:cursor-pointer' onClick={props.updateSort("Popularity")}>Popularity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map( (m,index) => <SingleMovieList handleSelectMovie={props.handleSelectMovie} movie={m} setNewFavourite = {props.setNewFavourite} updateFavourites={props.updateFavourites} key={index}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultViewList;