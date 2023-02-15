// Import React
import React from 'react';
import HeaderApp from './HeaderApp';

const DefaultView_Filter = props => {
    const [filter, setFilter] = React.useState("0");
    return (
     <form className ="viewFilter">
         <input type="radio" value={filter}></input>
         <label>Title</label>
     </form>
    )
}

export default DefaultView_Filter;