import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ arrayLength, publicationNumber }) => (
  <p className={styles.counter}>
    {publicationNumber}/{arrayLength}
  </p>
);

Counter.defaultProps = {
  publicationNumber: 0,
};

Counter.propTypes = {
  arrayLength: PropTypes.number.isRequired,
  publicationNumber: PropTypes.number,
};

export default Counter;
