import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span
              style={{
                backgroundColor: 'indianred',
              }}
              className={styles.status}
            ></span>
          ) : (
            <span
              style={{
                backgroundColor: 'cornflowerblue',
              }}
              className={styles.status}
            ></span>
          )}
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p
            style={{
              color: `${getRandomColor()}`,
            }}
            className={styles.name}
          >
            {friend.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
