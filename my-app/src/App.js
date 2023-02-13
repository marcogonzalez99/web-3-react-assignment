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

function App() {
  // For the movies state
  const [movies, setMovies] = useState([]);

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
          setMovies(data);
        }
        catch (err) {
          console.error(err);
        }
      }
    };
    getData();
  }, []);


  // What we are rendering for the user
  return (
    <main>
      <HeaderApp />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </main>
  );
}

export default App;
