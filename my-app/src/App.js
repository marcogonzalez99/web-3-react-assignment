// import logo from './logo.svg';
import './App.css';
// Import react
import React, {useEffect, useState} from 'react';
// Importing Components
import HeaderApp from './components/HeaderApp';
import Home from './components/Home';
// Importing Lodash for deepclones
import * as cloneDeep from 'lodash/cloneDeep';
// Importing Route for links
import { Route } from 'react-router-dom';

function App() {
  // For the movies state
  const [movies, setMovies] = useState([]);

  // Function to retrive the movie data
  useEffect( () => {
    const getData = async () => {
    try { 
      const url = "";
      const response = await fetch(url);
      const data = await response.json();
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
