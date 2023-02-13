// Importing React
import React from 'react';
//import { Link } from 'react-router-dom';

const Home = props => {
    let imgURL = 'https://unsplash.com/photos/X93I1fRX1QE';
    return (
    <div className='banner'
        style={{
            backgroundImage: `url(${imgURL})`,
            height: '800px',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
    }}>
        <div>
                <h1>Movie Browser</h1>
        </div>
    </div>  
    );
}

export default Home;