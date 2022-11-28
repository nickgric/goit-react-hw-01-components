import React from 'react';
import s from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <div className={s.section}>
      <h1 className={s.title}>React-HW01 @nickgric</h1>
      <div className={s.tasks}>{children}</div>
    </div>
  );
};
