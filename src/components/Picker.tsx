import React from 'react';
import { ClassSelection } from './ClassSelection/ClassSelection';
import styles from './Picker.module.css';

export const Picker = () => {
  return (
    <section className={styles.Picker}>
      <ClassSelection />
      <button className={styles.actionButton}>I feel lucky</button>
    </section>
  );
};
