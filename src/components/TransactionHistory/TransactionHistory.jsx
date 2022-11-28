import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th
            style={{
              color: `${getRandomColor()}`,
            }}
            className={styles.name}
          >
            Type
          </th>
          <th
            style={{
              color: `${getRandomColor()}`,
            }}
            className={styles.name}
          >
            Amount
          </th>
          <th
            style={{
              color: `${getRandomColor()}`,
            }}
            className={styles.name}
          >
            Currency
          </th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr className={styles.line} key={transaction.id}>
            <td className={styles.value}>{transaction.type}</td>
            <td className={styles.value}>{transaction.amount}</td>
            <td className={styles.value}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
