import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <div className={styles.movieCard}>
    <img src={posterUrl} alt={title} className={styles.poster} />
    <div className={styles.content}>
      <h2 className={styles.header2}> {title} </h2>
      <p className={styles.movieAbout}> {overview} </p>
    </div>
  </div>
);

MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieGridItem;
