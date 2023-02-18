// Import React
import React from 'react';
//import HeaderApp from './HeaderApp';
import SingleMovieList from './SingleMovieList';

const DefaultView_List = props => {
    return (
        <div className='text-3xl center overflow-y-scroll h-screen'>List of Movies
            <table className='table-auto'>
                <thead className='text-2xl'>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Year</th>
                        <th className='px-5'>Rating</th>
                        <th className='px-5'>Popularity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map( (m,index) => <SingleMovieList movie={m} key={index}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultView_List;