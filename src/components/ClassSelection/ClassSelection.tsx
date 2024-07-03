'use client';

import { playerClasses } from '@/model/PlayerClasses';
import styles from './ClassSelection.module.css';
import { ClassItem } from './ClassItem';
import { PlayerClass } from '@/model/types';

type ClassSelectionProps = {
  handleItemSelect: (item: PlayerClass) => void;
};

export const ClassSelection = ({ handleItemSelect }: ClassSelectionProps) => {
  return (
    <section className={styles.grid}>
      {playerClasses.map((playerClass) => (
        <ClassItem key={playerClass.name} playerClass={playerClass} onClick={handleItemSelect} />
      ))}
    </section>
  );
};
