import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ changeInputValue, value, searchBarName }) => (
  <input
    type="text"
    name={searchBarName}
    className={styles.input}
    value={value}
    onChange={changeInputValue}
  />
);

SearchBar.propTypes = {
  changeInputValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  searchBarName: PropTypes.string.isRequired,
};

export default SearchBar;
