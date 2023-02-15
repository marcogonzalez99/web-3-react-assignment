// Import React
import React from 'react';
import HeaderApp from './HeaderApp';
import DefaultView_Fav from './DefaultView_Fav'
import DefaultView_Filter from './DefaultView_Filter'
import DefaultView_List from './DefaultView_List'
const DefaultViewApp = props => {
    const [filtered, setFilter] = React.useState(props.movies);
    const updateFilter = (mode, value, mode2 = 0) => {
        const filteredMovies = props.movies;
        if (mode == "Title") {
            filteredMovies = props.movies.filter(movie => movie.title.contains(value));
            setFilter(filteredMovies);
        }
        else if (mode == "Genre") {
            filteredMovies = props.movie.filter(movie => movie.details.genres.some(e => e.name === value));
        }
        else if (mode == "Year") {

            const filteredMovies = props.movie.filter(movie => {
                let date = new Date(value, 1);
                let movieDate = Date.parse(movie.release_date);
                if (mode2 == true) {
                    return (date >= movieDate ? true : false);
                }
                else if (mode2 == false) {
                    return (date < movieDate ? true : false);
                }
            })
        }
        else if(mode == "Rating"){
            if(mode2 == false){
                filteredMovies = props.movie.filter(movie => movie.ratings <= value);
            }
            else if(mode2){
                filteredMovies = props.movie.filter(movie => movie.ratings >= value);
            }
        }
        setFilter(filteredMovies);
    }
    return (
        <div>
            <DefaultView_Filter updateFilter={updateFilter}/>
            <DefaultView_List movies={props.movies} />
            <DefaultView_Fav />
        </div>
    )
}

export default DefaultViewApp;