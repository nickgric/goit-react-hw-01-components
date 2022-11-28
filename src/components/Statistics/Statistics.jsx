import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && (
        <h2
          style={{
            color: `${getRandomColor()}`,
          }}
          className={styles.title}
        >
          Upload stats
        </h2>
      )}
      <ul className={styles.list}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}:</span>
            <span
              style={{
                color: `${getRandomColor()}`,
              }}
              className={styles.percentage}
            >
              {item.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
