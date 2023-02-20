// Import React
import React from 'react';
import DefaultView_Fav from './DefaultView_Fav.js'
import DefaultView_Filter from './DefaultView_Filter.js'
import DefaultView_List from './DefaultView_List.js'
const DefaultViewApp = props => {
    // React controlled form for handling the filter
    const [filtered, setFilter] = React.useState(props.movies);

    // Function to update the filter
    const updateFilter = (mode, value, filterType = 0) => {
        let filteredMovies = props.movies;
        if (mode == "Title") {
            filteredMovies = props.movies.filter(movie => movie.title.toString().includes(value));
            setFilter(filteredMovies);
        }
        else if (mode == "Genre") {
            filteredMovies = props.movie.filter(movie => movie.details.genres.some(e => e.name === value));
        }
        else if (mode == "Year") {

            const filteredMovies = props.movie.filter(movie => {
                let date = new Date(value, 1);
                let movieDate = Date.parse(movie.release_date);
                if (filterType) {
                    return (date >= movieDate ? true : false);
                }
                else if (filterType == false) {
                    return (date < movieDate ? true : false);
                }
            })
        }
        else if(mode == "Rating"){
            if(filterType == false){
                filteredMovies = props.movie.filter(movie => movie.ratings <= value);
            }
            else if(filterType){
                filteredMovies = props.movie.filter(movie => movie.ratings >= value);
            }
        }

        setFilter(filteredMovies);
    }
    return (
        <div className='flex'>
            <div className='w-1/5 bg-gray-200'>
                <DefaultView_Filter updateFilter={updateFilter}/>
            </div>
            <div className='w-7/10 bg-gray-300'>
                <DefaultView_List movies={props.movies}/>
            </div>
            <div className=' flex-grow w-1/10 bg-gray-200'>
                <DefaultView_Fav />
            </div>
        </div>
    )
}

export default DefaultViewApp;