import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => (
  <article className={styles.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.defaultProps = {
  title: 'Title',
  text: 'Publication text',
};
Publication.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
export default Publication;
