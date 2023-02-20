// Import React
import React from 'react';
//import HeaderApp from './HeaderApp';
import SingleMovieList from './SingleMovieList';

const DefaultView_List = props => {
    const propNames = Object.keys(props);
    const propValues = Object.values(props);
    console.log("Props passed down from parent:", props);
    console.log("Prop names:", propNames);
    console.log("Prop values:", propValues);
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

export default DefaultView_List;