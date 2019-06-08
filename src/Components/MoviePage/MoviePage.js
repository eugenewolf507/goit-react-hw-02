import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';
import styles from './MoviePage.module.css';
import movies from '../Data/movies.json';

const INITIAL_STATE = {
  searchMovie: '',
};

class MoviePage extends Component {
  state = { ...INITIAL_STATE };

  updateInputValue = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getFilteredMovies = searchMovieValue => {
    return movies.filter(movie => {
      const lowerMovieTitle = movie.title.toLowerCase().replace(/\s/g, '');
      const lowerMovieOverview = movie.overview
        .toLowerCase()
        .replace(/\s/g, '');
      return (
        lowerMovieTitle.includes(searchMovieValue) ||
        lowerMovieOverview.includes(searchMovieValue)
      );
    });
  };

  render() {
    const { searchMovie } = this.state;
    const moviesList = this.getFilteredMovies(searchMovie);
    return (
      <div className={styles.container}>
        <SearchBar
          changeInputValue={this.updateInputValue}
          value={searchMovie}
          searchBarName="searchMovie"
        />
        <MovieGrid items={moviesList} />
        {moviesList.length === 0 && <p>No matching results!</p>}
      </div>
    );
  }
}

export default MoviePage;
