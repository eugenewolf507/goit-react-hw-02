import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const transitionHistory = ({ transactions }) => (
  <table className={styles.history}>
    <thead>
      <tr className={styles.header}>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={styles.row}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}$</td>
          <td>{transaction.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

transitionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default transitionHistory;
