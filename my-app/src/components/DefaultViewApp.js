// Import React
import React, { useEffect } from 'react';
import DefaultViewFav from './DefaultView_Fav.js'
import DefaultViewFilter from './DefaultView_Filter.js'
import DefaultViewList from './DefaultView_List.js'
const DefaultViewApp = props => {
    // React controlled form for handling the filter
    const [filtered, setFilter] = React.useState(props.movies);
    const [newFavourite, updateFavourite] = React.useState(0);
    useEffect(() => {
        if(props.search != null && props.search !== ""){
            updateFilter("Title", props.search, 0);
        }
     }, []);
    const setNewFavourite = () => {
        updateFavourite(newFavourite + 1);
    }
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
            sortedArray = filtered.sort((a, b) => (a.ratings.average > b.ratings.average) ? 1 : ((b.ratings.average < a.ratings.average) ? -1 : 0) )
        }
        else if (mode === "Popularity"){
            sortedArray = filtered.sort((a, b) => (a.ratings.count > b.ratings.count) ? 1 : ((a.ratings.count < b.ratings.count) ? -1 : 0) )
        }
        console.log("??");
        setFilter(sortedArray);
        updateFavourite(newFavourite + 1);
    }
    
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
                    return movieDetails.some(e => e.name === value)
                }
                else{
                    return false;
                }
            });
        }
        else if (mode === "Year") {

            filteredMovies = props.movies.filter(movie => {
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
            filteredMovies = props.movies.filter(movie => {
                if((isNaN(value) || value === "") && (isNaN(value2) || value2 === "")){
                    return true;
                }
                if(isNaN(value) || value === ""){
                    return (movie.rating.average >= value2)
                }
                else if(isNaN(value2) || value2 === ""){
                    return (movie.rating.average <= value)
                }
                else{
                    return (movie.ratings.average >= value && movie.ratings.average <= value2)
                }
                
            });
        }
        setFilter(filteredMovies);
    }
    return (
        <div className='flex h-5/6'>
            <div className='w-1/5 bg-gray-200'>
                <DefaultViewFilter updateFilter={updateFilter}/>
            </div>
            <div className='w-3/5 bg-gray-300'>
                <DefaultViewList handleSelectMovie={props.handleSelectMovie} updateFavourites={props.updateFavourites} movies={filtered} setNewFavourite={setNewFavourite} updateSort={updateSort}/>
            </div>
            <div className='w-1/5 bg-gray-200'>
                <DefaultViewFav handleSelectMovie={props.handleSelectMovie} favourited={props.favourited} updateFavourites={props.updateFavourites} setNewFavourite={setNewFavourite}/>
            </div>
        </div>
    )
}

export default DefaultViewApp;