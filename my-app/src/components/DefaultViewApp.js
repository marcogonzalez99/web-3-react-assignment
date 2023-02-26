// Import React
import React, { useEffect } from 'react';
import DefaultViewFav from './DefaultView_Fav.js';
import DefaultViewFilter from './DefaultView_Filter.js';
import DefaultViewList from './DefaultView_List.js';
//Default
const DefaultViewApp = props => {
    // React controlled form for handling the filter
    const [filtered, setFilter] = React.useState(props.movies);
    /*
    State variable to handle update of favourite, forces re-render.
    */
    const [newFavourite, updateFavourite] = React.useState(0);
    
    // Fav Collapse
    const [favCollapsed, setFavCollapsed] = React.useState(false);

    // Filter Collapse
    const [filterCollapsed, setFilterCollapsed] = React.useState(false);

    
    useEffect(() => {
        if(props.search != null && props.search !== ""){
            updateFilter("Title", props.search, 0);
        }
     }, []);
    

     /**
      * Updates favourite state to force re-render.
      */
    const setNewFavourite = () => {
        updateFavourite(newFavourite + 1);
    }
    /**
     * 
     * @param {string} mode     Variable that chooses which  to sort by, either title, year, rating or genre.
     */
    const updateSort = (mode) => {
        let sortedArray = filtered;
        if(mode === "Title"){
            sortedArray = filtered.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0) )
        }
        else if (mode === "Year"){
            sortedArray = filtered.sort((a, b) => { 
                let dateA = Date.parse(a.release_date);
                let dateB = Date.parse(b.release_date);
                if(dateA > dateB){
                    return 1;
                } 
                else if (dateB > dateA){
                    return -1;
                }
                else{
                    return 0;
                }
            });
        }
        else if (mode === "Rating"){
            sortedArray = filtered.sort((a, b) => (a.ratings.average > b.ratings.average) ? 1 : ((a.ratings.average < b.ratings.average) ? -1 : 0) )
        }
        else if (mode === "Popularity"){
            sortedArray = filtered.sort((a, b) => (a.ratings.count > b.ratings.count) ? 1 : ((a.ratings.count < b.ratings.count) ? -1 : 0) )
        }
        setFilter(sortedArray);
        updateFavourite(newFavourite + 1);
    }
    /**
     * 
     * @param {*} mode Variable that chooses which  to filter , either title, year, rating or genre.
     * @param {*} value First value of filter upper end of numerical filters or title/genre
     * @param {*} value2 Second optional value, lower end of numerical filter.
     */
    const updateFilter = (mode, value, value2) => {
        let filteredMovies = props.movies;
        if (mode === "Title") {
            filteredMovies = props.movies.filter(movie => movie.title.toString().toLowerCase().includes(value.toLowerCase()));
            setFilter(filteredMovies);
        }
        else if (mode === "Genre") {  
            filteredMovies = props.movies.filter(movie => {
                let movieDetails = movie.details.genres;
                if(movie.details.genres){
                    return movieDetails.some(e => e.name.toString().toLowerCase() === value.toLowerCase());
                }
                else{
                    return false;
                }
            });
        }
        else if (mode === "Year") {

            filteredMovies = props.movies.filter(movie => {
                //Assign both values to dates then compare movie array to it.
                let date = new Date(value, 0);
                let date2 = new Date(value2, 0);
                let movieDate = Date.parse(movie.release_date);
                if((isNaN(value) || value === "") && (isNaN(value2) || value2 === "")){
          
                    return true;
                }
                if(value === "" || isNaN(value)){
                    return (date2 >= movieDate)
                }
                else if(value2 === "" || isNaN(value2)){

                    return (date <= movieDate)
                }
                else{
    
                    return (date <= movieDate && date2 >= movieDate)
                }

            });
        }
        else if(mode === "Rating"){
            //Check if rating values are valid, then filter for movies that fall into range. 
            filteredMovies = props.movies.filter(movie => {
                if((isNaN(value) || value === "") && (isNaN(value2) || value2 === "")){
                    return true;
                }
                if(isNaN(value) || value === ""){
                    return (movie.ratings.average <= value2)
                }
                else if(isNaN(value2) || value2 === ""){
                    return (movie.ratings.average >= value)
                }
                else{
                    return (movie.ratings.average >= value && movie.ratings.average <= value2)
                }
                
            });
        }
        setFilter(filteredMovies);
    }
    return (
        // Creates 3 colums of 20% 60% and 20% width.
        <div className='flex h-5/6'>
            {/* Column for the Filter */}
            <div className="w-1/5 mb-5">
                <div className="w-1/5 bg-gray-200 relative hover:bg-gray-400 ml-auto mr-4">
                    <button
                    className="w-full text-left py-2 px-4 font-bold"
                    onClick={() => setFilterCollapsed(!filterCollapsed)}
                    >
                    {filterCollapsed ? 'Show' : 'Hide'}
                    </button>
                </div>
                <div>
                    {!filterCollapsed && (
                    <div className=" px-4 bg-white">
                        <div className='bg-gray-200 pb-10'>
                            <DefaultViewFilter updateFilter={updateFilter}/>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
            {/* Column for the Movie List */}
            <div className='w-3/5 bg-gray-300'>
                <DefaultViewList handleSelectMovie={props.handleSelectMovie} updateFavourites={props.updateFavourites} movies={filtered} setNewFavourite={setNewFavourite} updateSort={updateSort}/>
            </div>

            {/* Column for the list of movies the user adds to their favourites */}
            <div className="w-1/5">
                <div className="w-1/5 bg-gray-200 relative hover:bg-gray-400 ml-4">
                    <button
                    className="w-full text-left py-2 px-4 font-bold"
                    onClick={() => setFavCollapsed(!favCollapsed)}
                    >
                    {favCollapsed ? 'Show' : 'Hide'}
                    </button>
                </div>
                <div>
                    {!favCollapsed && (
                    <div className=" px-4 bg-white">
                        <div className='bg-gray-200'>
                            <DefaultViewFav handleSelectMovie={props.handleSelectMovie} favourited={props.favourited} updateFavourites={props.updateFavourites} setNewFavourite={setNewFavourite}/>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default DefaultViewApp;