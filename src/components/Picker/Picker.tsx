'use client';
import React, { useCallback, useState } from 'react';
import { ClassSelection } from '../ClassSelection/ClassSelection';
import styles from './Picker.module.css';
import { PlayerClass } from '@/model/types';
import { getRandomClass } from '@/model/getRandomClass';
import { SelectionResult } from '../SelectionResult/SelectionResult';

export const Picker = () => {
  const [classSuggestion, setClassSuggestion] = useState<PlayerClass | null>();
  const [excludedItems, setExcludedItems] = useState<PlayerClass[]>([]);

  const handleItemSelect = (playerClass: PlayerClass) => {
    const hasExcluded = excludedItems.includes(playerClass);
    if (hasExcluded) {
      setExcludedItems([...excludedItems.filter((items) => items.name === playerClass.name)]);
    } else {
      setExcludedItems([...excludedItems, playerClass]);
    }
  };

  const handleBtnClick = useCallback(() => {
    let randomClass: PlayerClass;
    do {
      randomClass = getRandomClass();
    } while (excludedItems.includes(randomClass));

    setClassSuggestion(randomClass);
  }, [excludedItems]);

  return (
    <section className={styles.Picker}>
      <ClassSelection handleItemSelect={handleItemSelect} />
      <button className={styles.actionButton} onClick={handleBtnClick}>
        I feel lucky
      </button>

      {classSuggestion && <SelectionResult playerClass={classSuggestion} />}
    </section>
  );
};
