import { PlayerClass } from '@/model/types';
import styles from './SelectionResult.module.css';
import Image from 'next/image';

type SelectionResultProps = {
  playerClass: PlayerClass;
};

export const SelectionResult = ({ playerClass }: SelectionResultProps) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.heading}>Try out</h2>
      <div className={styles.SelectionResult}>
        <Image src={playerClass.picture} alt={playerClass.name} className={styles.classPicture} />
        <h3 className={styles.classTitle}>{playerClass.name}</h3>
      </div>
    </article>
  );
};
