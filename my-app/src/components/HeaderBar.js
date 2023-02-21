import React from 'react';
import { Link } from 'react-router-dom'
// import home from '../Home_Logo.png';

const HeaderBar = function (props) {
    return (
        <div>
            <Link to='/home'>
                <h1 className='text-3xl'>Movie Browser App</h1>
                <p>Using the create-react-app</p>
            </Link>
        </div>
    );
}

export default HeaderBar;