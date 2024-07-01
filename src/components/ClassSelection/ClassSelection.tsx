import { playerClasses } from '@/model/PlayerClasses';
import styles from './ClassSelection.module.css';
import Image from 'next/image';

export const ClassSelection = () => {
  return (
    <section className={styles.grid}>
      {playerClasses.map((playerClass) => (
        <div key={playerClass.name} className={styles.item}>
          <Image src={playerClass.picture} alt={playerClass.name} className={styles.img} />
          <div className={styles.description}>{playerClass.name}</div>
        </div>
      ))}
    </section>
  );
};
