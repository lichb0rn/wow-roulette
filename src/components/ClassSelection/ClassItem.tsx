import { PlayerClass } from '@/model/types';
import Image from 'next/image';
import styles from './ClassItem.module.css';
import classNames from 'classnames/bind';
import { useCallback, useState } from 'react';

type ClassItemProps = {
  className?: string;
  playerClass: PlayerClass;
  onClick: (playerClass: PlayerClass) => void;
};

const cx = classNames.bind(styles);

export const ClassItem = ({ playerClass, className, onClick }: ClassItemProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = useCallback(() => {
    onClick(playerClass);
    setIsSelected((prev) => !prev);
  }, [onClick, playerClass]);

  return (
    <div className={cx('ClassItem', { selected: isSelected })} onClick={handleClick}>
      <Image src={playerClass.picture} alt={playerClass.name} className={styles.img} />
      <div className={styles.description}>{playerClass.name}</div>
    </div>
  );
};
