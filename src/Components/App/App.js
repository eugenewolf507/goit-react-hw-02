import React from 'react';
import './App.css';
import MoviePage from '../MoviePage/MoviePage';
import Reader from '../Reader/Reader';
import Dashboard from '../Dashboard/Dashboard';
import publicationsList from '../Data/publications.json';

function App() {
  return (
    <div className="App">
      <Reader items={publicationsList} />
      <Dashboard />
      <MoviePage />
    </div>
  );
}

export default App;
