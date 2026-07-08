
import React from 'react'
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
const movies = useSelector(store => store.movies);

  return (
<div className='bg-black'>
  <div className='-mt-50 pl-12 relative z-20'>
<MovieList title = {"Now Playing"}  movies = {movies.addNowPlayingMovies} />
<MovieList title = {"Top Rated"}  movies = {movies.addTopRatedMovies} />
<MovieList title = {"Popular"}  movies = {movies.addPopularMovies} />
<MovieList title = {"Upcoming Movies"}  movies = {movies.addUpcomingMovies} />
<MovieList title = {"Horror"}  movies = {movies.addNowPlayingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer;

