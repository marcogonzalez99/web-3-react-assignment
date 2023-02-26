// Import React
import React, { useRef } from 'react';
//Component for filter menu.
const DefaultViewFilter = props => {
    const [filter, setFilter] = React.useState("0");
    const [filteredValue, setFilterValue] = React.useState("");
    const [filterSecond, setSecondFilter] = React.useState("");
    const title = useRef(null);
    const genre = useRef(null);
    const yearLess = useRef(null);
    const yearGreater = useRef(null);
    const ratingGreater = useRef(null);
    const ratingLesser = useRef(null);
    
    
    /**
     * Function to reset input fields after selecting new filter.
     * @param {*} e Event
     */
    function selectFilter (e) {
        setFilterValue("");
        setSecondFilter("");
        title.current.value = "";
        genre.current.value = "";
        yearLess.current.value = "";
        yearGreater.current.value = "";
        ratingGreater.current.value = "";
        ratingLesser.current.value = "";
        setFilter(e.target.value);
    }
    /**
     * Function to handle the submit of the filter details.
     * @param {*} e 
     */
    function submit (e){
        e.preventDefault();
        props.updateFilter(filter, filteredValue, filterSecond);
    }
    //Function to change value of first filter.
    function changeValue (e) {
        setFilterValue(e.target.value);
    }
    //Function to change value of second filter value
    function changeFilterTwo (e) {
        setSecondFilter(e.target.value);
    }
    //Clear The filter.
    function clear (e){
        e.preventDefault();
        props.updateFilter("Default", 0, 0);
        setFilterValue("");
        setSecondFilter("");
    }
    return (
        <div>  
            <h1 className='text-3xl font-bold text-center pt-5'>Movie Filters</h1>
            <form className ="viewFilter mt-5 mx-4">
                <div className="bg-gray-300 rounded-lg p-5 content-center">
                    <input type="radio" value="Title" onChange={selectFilter} checked={"Title" === filter}></input>
                    <label className='text-xl mr-1 ml-1 font-bold'>
                        Title
                    </label>
                    <input className='border-2 border-[#3aafa9] w-1/2 p-1' ref ={title} type="text" disabled ={"Title" !== filter} onChange={changeValue}></input>
                </div>
                
                <div className="bg-gray-300 rounded-lg p-5 my-3">
                    <input type="radio" value="Genre" onChange={selectFilter} checked={"Genre" === filter}></input>
                    <label className='text-xl mr-1 ml-1 font-bold'>
                        Genre
                    </label>
                    <input className='border-2 border-[#3aafa9] w-1/2 p-1' ref ={genre}  type="text" disabled ={"Genre" !== filter} onChange={changeValue}></input>
                </div>

                <div className="bg-gray-300 rounded-lg p-5 my-3">
                    <input type="radio" value="Year" onChange={selectFilter} checked={"Year" === filter}></input>
                    <label className='text-xl mr-1 ml-1 font-bold'>
                        Year
                    </label>
                    <div className='mt-5 mb-2'>
                        <span className='text-lg mr-1 ml-8 font-bold'>Less</span>
                        <span><input className='border-2 border-[#3aafa9] w-1/2 p-1' ref ={yearLess} type="text"  disabled ={"Year" !== filter} onChange={changeFilterTwo} ></input></span>
                    </div>
                    <div>
                        <span className='text-lg mr-1 ml-8 font-bold'>Greater</span>
                        <span><input className='border-2 border-[#3aafa9] w-1/2 p-1' ref ={yearGreater} type="text"  disabled ={"Year" !== filter} onChange={changeValue} ></input></span>
                    </div>
                    {/* <input type="text" disabled ={"Year" != filter} onChange={changeFilterTwo}></input> */}
                </div>

                <div className="bg-gray-300 rounded-lg p-5 my-3">
                    <input type="radio" value="Rating" onChange={selectFilter} checked={"Rating" === filter}></input>
                    <label className='text-xl mr-1 ml-1 font-bold'>
                        Rating
                    </label>

                    <div className='mt-5 mb-2'>
                        <span className='text-lg mr-1 ml-8 font-bold'>Less</span>
                        <span><input className='border-2 border-[#3aafa9] w-1/2 p-1' ref ={ratingLesser}  type="text" disabled ={"Rating" !== filter} onChange={changeFilterTwo}></input></span>
                    </div>

                    <div>
                    <span className='text-lg mr-1 ml-8 font-bold'>Greater</span>
                    <span><input className='border-2 border-[#3aafa9] w-1/2 p-1' type="text" ref ={ratingGreater}  disabled ={"Rating" !== filter} onChange={changeValue}></input></span>
                    </div>
                    {/* <input type="text" disabled ={"Rating" != filter} onChange={changeFilterTwo}></input> */}
                </div>
                <button className='text-white text-xl bg-[#3aafa9] mx-2 px-5 rounded hover:bg-sky-700' onClick ={submit}>Submit</button>
                <button className='text-white text-xl bg-[#3aafa9] mx-2 px-5 rounded hover:bg-sky-700' onClick = {clear}>Clear</button>
            </form>
        </div>
    )
}

export default DefaultViewFilter;