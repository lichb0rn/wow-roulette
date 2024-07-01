import {
  deathKnightPic,
  demonHunterPic,
  druidPic,
  evokerPic,
  hunterPic,
  magePic,
  monkPic,
  paladinPic,
  priestPic,
  roguePic,
  shamanPic,
  warlockPic,
  warriorPic,
} from '@/assets';
import { PlayerClass } from './types';

export const playerClasses: PlayerClass[] = [
  {
    name: 'Death Knight',
    picture: deathKnightPic,
  },
  {
    name: 'Demon Hunter',
    picture: demonHunterPic,
  },
  {
    name: 'Druid',
    picture: druidPic,
  },
  {
    name: 'Evoker',
    picture: evokerPic,
  },
  {
    name: 'Hunter',
    picture: hunterPic,
  },
  {
    name: 'Mage',
    picture: magePic,
  },
  {
    name: 'Monk',
    picture: monkPic,
  },
  {
    name: 'Paladin',
    picture: paladinPic,
  },
  {
    name: 'Priest',
    picture: priestPic,
  },
  {
    name: 'Rogue',
    picture: roguePic,
  },
  {
    name: 'Shaman',
    picture: shamanPic,
  },
  {
    name: 'Warlock',
    picture: warlockPic,
  },
  {
    name: 'Warrior',
    picture: warriorPic,
  },
];
