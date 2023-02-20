// Import React
import React, { useEffect } from 'react';

const DefaultView_Filter = props => {
    const [filter, setFilter] = React.useState("0");
    const [filteredValue, setFilterValue] = React.useState("American Beauty");
    const [filterType, setFilterType] = React.useState("0");
    const [submit, setSubmit] = React.useState("0");

    return (
        <div>
            <h1 className='text-3xl font-bold text-center pt-5'>Movie Filters</h1>
            <form className ="viewFilter">
                {/* <input type="radio" value="Title" onChange={this.onValueChange} checked={"Title" === filter}></input>
                <label>Title</label>
                <input type="text" disabled ="yes"></input>
                <input type="radio" value="Genre" onChange={this.onValueChange} checked={"Genre" === filter}></input>
                <label>Genre</label>
                <input type="radio" value="Year" onChange={this.onValueChange} checked={"Year" === filter}></input>
                <label>Year</label>
                <input type="radio" value="Rating" onChange={this.onValueChange} checked={"Rating" === filter}></input>
                <label>Rating</label>
                <button>Submit</button>
                <button>Clear</button> */}
            </form>
        </div>
    )
}

export default DefaultView_Filter;