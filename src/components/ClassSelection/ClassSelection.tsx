'use client';

import { playerClasses } from '@/model/PlayerClasses';
import styles from './ClassSelection.module.css';
import { ClassItem } from './ClassItem';
import { useState } from 'react';
import { PlayerClass } from '@/model/types';

export const ClassSelection = () => {
  const [excludedItems, setExcludedItems] = useState<PlayerClass[]>([]);

  const handleItemSelect = (playerClass: PlayerClass) => {
    const hasExcluded = excludedItems.includes(playerClass);
    if (hasExcluded) {
      setExcludedItems([...excludedItems.filter((items) => items.name === playerClass.name)]);
    } else {
      setExcludedItems([...excludedItems, playerClass]);
    }
  };

  console.log(excludedItems);

  return (
    <section className={styles.grid}>
      {playerClasses.map((playerClass) => (
        <ClassItem key={playerClass.name} playerClass={playerClass} onClick={handleItemSelect} />
      ))}
    </section>
  );
};
