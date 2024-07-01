import { StaticImageData } from 'next/image';

export type Race = {
  name: string;
  picture: StaticImageData;
  availableClasses: PlayerClass[];
};

export type PlayerClass = {
  name: string;
  picture: StaticImageData;
};
