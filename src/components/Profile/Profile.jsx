import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p
          style={{
            color: `${getRandomColor()}`,
          }}
          className={styles.name}
        >
          {username}
        </p>
        <p
          style={{
            color: `${getRandomColor()}`,
          }}
          className={styles.tag}
        >
          @{tag}
        </p>
        <p
          style={{
            color: `${getRandomColor()}`,
          }}
          className={styles.location}
        >
          {location}
        </p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers: </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views: </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes: </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
