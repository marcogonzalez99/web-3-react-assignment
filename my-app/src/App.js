// import logo from './logo.svg';
import './App.css';
// Import react
import React, { useEffect, useState } from 'react';
// Importing Components
import HeaderApp from './components/HeaderApp';
import Home from './components/Home';
// Importing Lodash for deepclones
//import * as cloneDeep from 'lodash/cloneDeep';
// Importing Route for links
import { Route, Routes } from 'react-router-dom';
import DefaultViewApp from './components/DefaultViewApp';
import SingleMovieDetailsView from './components/SingleMovieDetailsViewApp';
function App() {
  // For the movies state
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [favourited, setFavourites] = React.useState([]);

  // To set the new movie
  const [selectedMovie, setSelectedMovie] = useState(movies.find(movie => movie.id === 13));
  // Function to retrive the movie data
  useEffect(() => {
    const getData = async () => {
      if (movies.length <= 0) {
        try {
          let dataJson = localStorage.getItem("movies");
          let data;
          const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200";
          if (!dataJson) {
            //fetch data 
  
            const resp = await fetch(url)
            data = await resp.json();
            localStorage.setItem("movies", JSON.stringify(data));
          }
          else {
            data = JSON.parse(dataJson);
          }
          const sortedMovies = data.sort((a,b) => {
            if (a.title < b.title) {
              return -1;
            } else if (a.title > b.title) {
              return 1;
            } else {
              return 0;
            }
          });  
          setMovies(sortedMovies);
        }
        catch (err) {
          console.error(err);
        }
      }
    };
    getData();
  }, [movies.length]);
  /**
   * Function to update the search term, functions the same as title filter.
   * @param {*} searchTerm Search term to filter movies by.
   */
  const updateSearch = (searchTerm) => {
    setSearch(searchTerm);
  }
/**
 * Function to add OR remove favourite, 
 * @param {*} favId ID of movie to add / remove.
 * @param {*} mode Value to either add or remove the favourite, 0 being to remove and 1 being to add.
 * @returns 
 */
  const updateFavourites = (favId, mode) =>{
    let favouritedMovies = favourited;
    if (mode === 1) {
      if(favourited.findIndex(f => f.id === favId) !== -1){
        return;
      }
      else{
        //Find movie index to add. 
        let movieIndex = movies.findIndex(movie => movie.id === favId);
        if(movieIndex !== -1){
          favouritedMovies.push(movies[movieIndex]);
        }
      }
        
    }
    else{
      //Find movie index to remove. 
      let removeIndex = favourited.findIndex(movie => movie.id === favId);
      if(removeIndex !== -1){
        favouritedMovies.splice(removeIndex, 1);
      }
    }
    setFavourites(favouritedMovies);
  }
  /** */
  function handleSelectMovie(id) {
    const movie = movies.find(movie => movie.id === id);
    setSelectedMovie(movie);
  }

  // What we are rendering for the user
  return (
    <main>
      <HeaderApp />
      <Routes>
        <Route path='/' element={<Home updateSearch={updateSearch}/>}></Route>
        <Route path='/home' element={<Home updateSearch={updateSearch}/>}></Route>
        <Route path='/browse' element ={<DefaultViewApp movies={movies} favourited = {favourited} updateFavourites={updateFavourites} handleSelectMovie={handleSelectMovie}/>}></Route>
        <Route path='/singleView' element={<SingleMovieDetailsView movie={selectedMovie} updateFavourites={updateFavourites}/>}></Route>
        <Route path='/browseSearch' element ={<DefaultViewApp movies={movies} favourited = {favourited} updateFavourites={updateFavourites} handleSelectMovie={handleSelectMovie} search={search}/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
