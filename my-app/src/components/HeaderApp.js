import React from 'react';
import HeaderBar from './HeaderBar';
import HeaderMenu from './HeaderMenu';

const HeaderApp = function (props) {
    return (
        <header className='text-white bg-[#17252a] grid-cols-1 items-center gap-10 py-3'>
            <HeaderBar />
            <HeaderMenu />
        </header>
    );
}

export default HeaderApp;