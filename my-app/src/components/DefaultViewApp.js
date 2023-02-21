// Import React
import React, { useEffect } from 'react';
import DefaultViewFav from './DefaultView_Fav.js'
import DefaultViewFilter from './DefaultView_Filter.js'
import DefaultViewList from './DefaultView_List.js'
const DefaultViewApp = props => {
    // React controlled form for handling the filter
    const [filtered, setFilter] = React.useState(props.movies);
    useEffect(() => {
        updateFilter("Year", 1991, 1999);
        //updateFilter("Rating", 5, 8);

    }, [])
    const updateFilter = (mode, value, value2) => {
        let filteredMovies = props.movies;
        if (mode == "Title") {
            filteredMovies = props.movies.filter(movie => movie.title.toString().includes(value));
            setFilter(filteredMovies);
        }
        else if (mode == "Genre") {  
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
        else if (mode == "Year") {

            filteredMovies = props.movies.filter(movie => {
                let date = new Date(value, 0);
                let date2 = new Date(value2, 0);
                let movieDate = Date.parse(movie.release_date);
                if(date <= movieDate && date2 >= movieDate){
                    return true;
                }

                return false;

            });
        }
        else if(mode == "Rating"){
            filteredMovies = props.movies.filter(movie => (movie.ratings.average >= value && movie.ratings.average <= value2));
        }
        console.log(filteredMovies);
        setFilter(filteredMovies);
    }
    return (
        <div className='flex h-5/6'>
            <div className='w-1/5 bg-gray-200'>
                <DefaultViewFilter updateFilter={updateFilter}/>
            </div>
            <div className='w-7/10 bg-gray-300'>
                <DefaultViewList handleSelectMovie={props.handleSelectMovie} movies={filtered}/>
            </div>
            <div className=' flex-grow w-1/10 bg-gray-200'>
                <DefaultViewFav />
            </div>
        </div>
    )
}

export default DefaultViewApp;