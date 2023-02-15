// Importing React
import React from 'react';
//import { Link } from 'react-router-dom';

const Home = props => {
    let imgURL = 'https://images.unsplash.com/photo-1653022860307-0ccb6379f78b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80';
    return (
    <div className='banner text-white font-bold text-center'
        style={{
            backgroundImage: `url(${imgURL})`,
            height: '891px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
    }}>
        <div className='bg-slate-300 w-2/5 h-1/3 content-center mx-auto my-auto rounded-lg py-5 relative top-1/4'>
            <h1 className='text-black text-3xl py-5'>Movie Browser</h1>
            <input className="bg-black p-2 w-3/4 rounded-md mx-10 my-8 py-3" type="text" placeholder="Enter search term"/>
            <button className="text-xl bg-[#3aafa9] mx-2 px-5 py-1 rounded">Show Matching Movies</button>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 py-1 rounded'>Show All Movies</button>
        </div>
        <p className='fixed bottom-0 text-center p-4 text-white'>Image Retreived From Unsplash, Author: </p>
    </div>  
    );
}

export default Home;