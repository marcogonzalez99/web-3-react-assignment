// Importing React
import React from 'react';
//import { Link } from 'react-router-dom';

const Home = props => {
    let imgURL = 'https://images.unsplash.com/photo-1653022860307-0ccb6379f78b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80';
    return (
    <div className='banner'
        style={{
            backgroundImage: `url(${imgURL})`,
            height: '895px',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
    }}>
        <div className='box-border h-320 w-320 bg-midnight'>
                <h1>Movie Browser</h1>
        </div>
    </div>  
    );
}

export default Home;