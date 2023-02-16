// Importing React
import React from 'react';
//import { Link } from 'react-router-dom';

const Home = props => {

    return (
        <div className="text-white text-center bg-hero bg-cover bg-center"     
        style={{
        height: '891px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
        }}
    >
            <div className='bg-slate-300 w-2/5 h-1/3 content-center mx-auto my-auto rounded-lg py-5 relative top-1/4'>
                <h1 className='text-black text-3xl py-5'>Movie Browser</h1>
                <input className="bg-black p-2 w-3/4 rounded-md mx-10 my-8 py-3" type="text" placeholder="Enter search term"/>
                <button className="text-xl bg-[#3aafa9] mx-2 px-5 py-1 rounded hover:bg-sky-700">Show Matching Movies</button>
                <button className="text-xl bg-[#3aafa9] mx-2 px-5 py-1 rounded hover:bg-sky-700">Show All Movies</button>
            </div>
                <p className='fixed bottom-0 text-center p-4 text-white'>Image Retreived From Unsplash, Author: https://unsplash.com/@thehalaldesign</p>
        </div> 
    );
}

export default Home;