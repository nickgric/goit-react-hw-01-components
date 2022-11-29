import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img className={avatar} src={avatar} alt="User avatar" width="48" />
      <p
        style={{
          color: `${getRandomColor()}`,
        }}
        className={styles.name}
      >
        {name}
      </p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
