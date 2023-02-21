// Import React
import React, { useEffect } from 'react';

const DefaultViewFilter = props => {
    const [filter, setFilter] = React.useState("0");
    const [filteredValue, setFilterValue] = React.useState("");
    const [filterSecond, setSecondFilter] = React.useState("1");
    function selectFilter (e) {
        setFilterValue("");
        setFilter(e.target.value);
    }
    function submit (e){
        e.preventDefault();
        props.updateFilter(filter, filteredValue, filterSecond);
    }
    function changeValue (e) {
        setFilterValue(e.target.value);
    }
    function changeFilterTwo (e) {
        setSecondFilter(e.target.value);
    }
    function clear (e){
        e.preventDefault();
        props.updateFilter("Default", 0, 0);
    }
    return (
        <div>
            
            <h1 className='text-3xl font-bold text-center pt-5'>Movie Filters</h1>
            <form className ="viewFilter">
                <input type="radio" value="Title" onChange={selectFilter} checked={"Title" === filter}></input>
                <label>Title</label>
                <input type="text" disabled ={"Title" != filter} onChange={changeValue}></input>

                <input type="radio" value="Genre" onChange={selectFilter} checked={"Genre" === filter}></input>
                <label>Genre</label>
                <input type="text" disabled ={"Genre" != filter} onChange={changeValue}></input>

                <input type="radio" value="Year" onChange={selectFilter} checked={"Year" === filter}></input>
                <label>Year</label>
                <input type="text" disabled ={"Year" != filter} onChange={changeValue} ></input>
                <label>Less</label>
                <input type="text" disabled ={"Year" != filter} onChange={changeFilterTwo}></input>
                <label>Greater</label>
                

                <input type="radio" value="Rating" onChange={selectFilter} checked={"Rating" === filter}></input>
                <label>Rating</label>
                <input type="text" disabled ={"Rating" != filter} onChange={changeValue}></input>
                <label>Less</label>
                <input type="text" disabled ={"Rating" != filter} onChange={changeFilterTwo}></input>
                <label>Greater</label>

                <button onClick ={submit}>Submit</button>
                <button onClick = {clear}>Clear</button>
            </form>
        </div>
    )
}

export default DefaultViewFilter;