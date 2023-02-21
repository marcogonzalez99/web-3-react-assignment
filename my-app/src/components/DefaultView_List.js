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
                        <th className='pr-96'>Title</th>
                        <th className='px-5'>Year</th>
                        <th className='px-5'>Rating</th>
                        <th className='px-5'>Popularity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map( (m,index) => <SingleMovieList handleSelectMovie={props.handleSelectMovie} movie={m} key={index}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultViewList;