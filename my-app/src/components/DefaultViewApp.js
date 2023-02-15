// Import React
import React from 'react';
import HeaderApp from './HeaderApp';

const DefaultViewApp = props => {
    return (
        <div>
            <HeaderApp />
            {/* Insert the 3 View Apps here */}
            <DefaultView_Filter />
            <DefaultView_List />
            <DefaultView_Fav />
        </div>
    )
}

export default DefaultViewApp;