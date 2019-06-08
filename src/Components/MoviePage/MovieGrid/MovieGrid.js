import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ items }) => (
  <div className={styles.grid}>
    {items.map(item => (
      <MovieGridItem {...item} key={item.id} />
    ))}
  </div>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieGrid;
