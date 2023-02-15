import React from 'react';

const HeaderMenu = function (props) {
    return (
        <nav className='absolute inset-y-4 right-0 p-3'>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded'>Home</button>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded'>All Movies</button>
        </nav>
    );
}

export default HeaderMenu;