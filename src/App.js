import React,{useEffect,useState} from "react";
import './App.css';
import searchIcon from './searchIcon.svg'; 
import MovieCard from "./MovieCard";
// 12e0a10c
const api_url='http://www.omdbapi.com?apikey=12e0a10c';
// const movie1={
//   "Title": "Spiderman in Cannes",
//   "Year": "2016",
//   "imdbID": "tt5978586",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
// }
function App() {
  const [movies,setMovies]=useState([]);
  const [searchMovie,setSearchMovie]=useState('');
    const searchMovies=async(title)=>{
      const response=await fetch(`${api_url}&s=${title}`)
      const data= await response.json();
      console.log(data.Search);
      setMovies(data.Search);
    }
    useEffect(()=>{
      searchMovies({searchMovie});
    },[])

  return (
    <div className="app">
<h1>Movie Bar</h1>
<div className="search">
  <input placeholder="Search for movies....." value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}/>
<img src={searchIcon} alt="search" onClick={()=>searchMovies(searchMovie)}/>
</div>
{
  movies?.length>0?<div className="container">{
    movies.map((movie)=>
    <MovieCard key={movie.imdbID} movie1={movie}/>
  )
  }
  </div>:(
    <div className="empty">
      <h2>No movies found</h2>
      </div>
  )
}

    </div>
  );
}

export default App;
