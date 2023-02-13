// import logo from './logo.svg';
import './App.css';
// Import react
import React, {useEffect, useState} from 'react';
// Importing Components
import HeaderApp from './components/HeaderApp';
import Home from './components/Home';
// Importing Lodash for deepclones
//import * as cloneDeep from 'lodash/cloneDeep';
// Importing Route for links
//import { Route } from 'react-router-dom';

function App() {
  // For the movies state
  const [movies, setMovies] = useState([]);

  // Function to retrive the movie data
  useEffect( () => {
    const getData = async () => {
    try { 
      let dataJson = localStorage.getItem("movies");
      let data;
      const url = "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
      if(!dataJson){
        //fetch data
        console.log("Fetched!"); 
        data = await fetch(url)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem("movies", JSON.stringify(data));
          return data;
        });
      }
      else {
        data = JSON.parse(dataJson);
      }
      console.log(data[0]);
      setMovies(data);
    }
    catch (err) {
      console.error(err);
    }
  };
  getData();
  }, [] );


  // What we are rendering for the user
  return (
    <main>
      <HeaderApp />
      <Home />
    </main>
  );
}

export default App;
