import React from 'react';
import HeaderBar from './HeaderBar';
import HeaderMenu from './HeaderMenu';

const HeaderApp = function (props) {
    return (
        <header className='header'>
            <HeaderBar />
            <HeaderMenu />
        </header>
    );
}

export default HeaderApp;