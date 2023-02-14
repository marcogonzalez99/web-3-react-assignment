// Importing React
import React from 'react';
//import { Link } from 'react-router-dom';

const Home = props => {
    let imgURL = 'https://images.unsplash.com/photo-1653022860307-0ccb6379f78b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80';
    return (
    <div className='banner text-white font-bold text-center'
        style={{
            backgroundImage: `url(${imgURL})`,
            height: '895px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
    }}>
        <div className='h-320 w-320 bg-slate'>
                <h1>Movie Browser</h1>
                <input type="text" placeholder="Enter search term" className="bg-black p-2 w-340 rounded-lg" />
                <button className="bg-indigo-500">Show Matching Movies</button>
                <button className='bg-indigo-500'>Show All Movies</button>
        </div>
        <p className='fixed bottom-0 text-center p-4 text-white'>Image Retreived From Unsplash, Author: </p>
    </div>  
    );
}

export default Home;