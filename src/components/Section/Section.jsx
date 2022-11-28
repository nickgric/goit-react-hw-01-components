import React from 'react';
import styles from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>React-HW01 @nickgric</h1>
      <div className={styles.tasks}>{children}</div>
    </div>
  );
};
