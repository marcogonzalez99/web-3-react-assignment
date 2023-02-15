import React from 'react';
import { Link } from 'react-router-dom'
const HeaderMenu = function (props) {
    return (
        <nav className='absolute inset-y-4 right-0 p-3'>
            <Link to ='/home'>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded'>Home</button>
            </Link>
            <Link to='/browse'>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded'>All Movies</button>
            </Link>
        </nav>
    );
}

export default HeaderMenu;