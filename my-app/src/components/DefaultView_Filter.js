// Import React
import React, { useEffect } from 'react';
import HeaderApp from './HeaderApp';

const DefaultView_Filter = props => {
    const [filter, setFilter] = React.useState("0");
    const [filteredValue, setFilterValue] = React.useState("American Beauty");
    const [filterType, setFilterType] = React.useState("0");
    const [submit, setSubmit] = React.useState("0");

    return (
     <form className ="viewFilter">
         <input type="radio" value="Title" onChange={onValueChange} checked={"Title" === filter}></input>
         <label>Title</label>
         <input type="text" disabled ="yes"></input>
         <input type="radio" value="Genre" onChange={onValueChange} checked={"Genre" === filter}></input>
         <label>Genre</label>
         <input type="radio" value="Year" onChange={onValueChange} checked={"Year" === filter}></input>
         <label>Year</label>
         <input type="radio" value="Rating" onChange={onValueChange} checked={"Rating" === filter}></input>
         <label>Rating</label>
         <button>Submit</button>
         <button>Clear</button>
     </form>
    )
}

export default DefaultView_Filter;