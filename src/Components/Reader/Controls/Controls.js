import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ changePublication, publicationId, arrayLength }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="backwards"
      className={styles.button}
      onClick={changePublication}
      disabled={publicationId <= 0}
    >
      Назад
    </button>
    <button
      type="button"
      name="forward"
      className={styles.button}
      onClick={changePublication}
      disabled={publicationId >= arrayLength - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  changePublication: PropTypes.func.isRequired,
  publicationId: PropTypes.number.isRequired,
  arrayLength: PropTypes.number.isRequired,
};

export default Controls;
