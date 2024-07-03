import { playerClasses } from './PlayerClasses';
import { PlayerClass } from './types';

export const getRandomClass = (): PlayerClass => {
  const totalClasses = playerClasses.length;
  const randomNumber = Math.floor(Math.random() * totalClasses);
  return playerClasses[randomNumber];
};
