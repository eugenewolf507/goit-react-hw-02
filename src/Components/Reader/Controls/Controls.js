import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ changePublication, bacwardsDisabled, forwardDisabled }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="backwards"
      className={styles.button}
      onClick={changePublication}
      disabled={bacwardsDisabled}
    >
      Назад
    </button>
    <button
      type="button"
      name="forward"
      className={styles.button}
      onClick={changePublication}
      disabled={forwardDisabled}
    >
      Вперед
    </button>
  </section>
);

Controls.defaultProps = {
  bacwardsDisabled: false,
  forwardDisabled: true,
};

Controls.propTypes = {
  changePublication: PropTypes.func.isRequired,
  bacwardsDisabled: PropTypes.bool,
  forwardDisabled: PropTypes.bool,
};

export default Controls;
