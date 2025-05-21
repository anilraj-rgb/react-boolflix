import { useState } from 'react'
import { useEffect, useState } from "react"
import GlobalContext from "./contexts/GlobalContext"
import AppLayout from "./layout/AppLayout"
import axios from "axios"

const apiUrlMovies = "https://api.themoviedb.org/3/search/movie"
const apiUrlTV = "https://api.themoviedb.org/3/search/tv"
const apiKey = "c05e518add83e0c9c150b794a28eb198"
const apiUrlImg = "https://image.tmdb.org/t/p/"

function App() {
  const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);
  console.log(movies);
  console.log(series);

  
  function getMovies(query) {
    axios.get(`${apiUrlMovies}?api_key=${apiKey}&query=${query}`).then((resp) => {
      //console.log(resp.data.results);
      setMovies(resp.data.results);
    })
  }
  
  function getSeries(query) {
    axios.get(`${apiUrlTV}?api_key=${apiKey}&query=${query}`).then((resp) => {
      // console.log(resp.data.results);
      setSeries(resp.data.results);
    })
  }

  function getAll(query) {
    getMovies(query);
    getSeries(query);
  }

  const globalContextValue = { getAll, movies, setMovies, series, setSeries, apiKey, apiUrlMovies, apiUrlImg }

  
  return (
    <>
      <GlobalContext.Provider value={globalContextValue} >
        <AppLayout />
      </GlobalContext.Provider >
    </>
  )
}

export default App