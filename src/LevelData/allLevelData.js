import TowerLevel from '../assets/02.jpg';
import Natu from '../assets/pokemon/0177Natu.png';
import Onix from '../assets/pokemon/0095Onix.png';
import Igglybuff from '../assets/pokemon/0174Igglybuff.png';
import Alakazam from '../assets/pokemon/0065Alakazam.png';
import Venomoth from '../assets/pokemon/0049Venomoth.png';
import Larvitar from '../assets/pokemon/0246Larvitar.png';
import Ekans from '../assets/pokemon/0023Ekans.png';
import Houndour from '../assets/pokemon/0228Houndour.png';
import Dugtrio from '../assets/pokemon/0051Dugtrio.png';

import HouseLevel from '../assets/00.jpg';
import Golbat from '../assets/pokemon/0042Golbat.png';
import Weedle from '../assets/pokemon/0013Weedle.png';
import Gloom from '../assets/pokemon/0044Gloom.png';
import Kingler from '../assets/pokemon/0099Kingler.png';
import Butterfree from '../assets/pokemon/0012Butterfree.png';
import Magmar from '../assets/pokemon/0126Magmar.png';
import Diglett from '../assets/pokemon/0050Diglett.png';
import Lapras from '../assets/pokemon/0131Lapras.png';
import Growlithe from '../assets/pokemon/0058Growlithe.png';

import CityLevel from '../assets/01.jpg';
import Pinsir from '../assets/pokemon/0127Pinsir.png';
import Kabuto from '../assets/pokemon/0140Kabuto.png';
import Dragonair from '../assets/pokemon/0148Dragonair.png';
import Seadra from '../assets/pokemon/0117Seadra.png';
import Magikarp from '../assets/pokemon/0129Magikarp.png';
import Cubone from '../assets/pokemon/0104Cubone.png';
import Oddish from '../assets/pokemon/0043Oddish.png';
import Nidoran from '../assets/pokemon/0032Nidoran.png';
import Poliwhirl from '../assets/pokemon/0061Poliwhirl.png';

const Zero = {
  level: 0,
  name: 'Full House',
  board: HouseLevel,
  cover: 'https://www.j-opolis.com/fhretro/images/fh_logos/fh_title.jpg',
  characters: [
    {
      name: 'Golbat',
      profile: Golbat,
      found: false,
      xCoord: [54, 55],
      yCoord: [40, 42],
    },
    {
      name: 'Weedle',
      profile: Weedle,
      found: false,
      xCoord: [55, 56],
      yCoord: [64, 66],
    },
    {
      name: 'Gloom',
      profile: Gloom,
      found: false,
      xCoord: [40, 42],
      yCoord: [90, 95],
    },
    {
      name: 'Kingler',
      profile: Kingler,
      found: false,
      xCoord: [33, 43],
      yCoord: [16, 31],
    },
    {
      name: 'Butterfree',
      profile: Butterfree,
      found: false,
      xCoord: [68, 74],
      yCoord: [50, 60],
    },
    {
      name: 'Magmar',
      profile: Magmar,
      found: false,
      xCoord: [62, 65],
      yCoord: [79, 87],
    },
    {
      name: 'Diglett',
      profile: Diglett,
      found: false,
      xCoord: [37, 39],
      yCoord: [58, 66],
    },
    {
      name: 'Lapras',
      profile: Lapras,
      found: false,
      xCoord: [51, 53],
      yCoord: [51, 55],
    },
    {
      name: 'Growlithe',
      profile: Growlithe,
      found: false,
      xCoord: [47, 49],
      yCoord: [107, 114],
    },
  ],
};
const One = {
  level: 1,
  name: 'Saffron City',
  board: CityLevel,
  cover: 'https://www.serebii.net/pokearth/maps/kanto-frlg/36.png',
  characters: [
    {
      name: 'Pinsir',
      profile: Pinsir,
      found: false,
      xCoord: [36, 39],
      yCoord: [97, 101],
    },
    {
      name: 'Kabuto',
      profile: Kabuto,
      found: false,
      xCoord: [50, 5539],
      yCoord: [70, 73],
    },
    {
      name: 'Dragonair',
      profile: Dragonair,
      found: false,
      xCoord: [43, 46],
      yCoord: [32, 38],
    },
    {
      name: 'Seadra',
      profile: Seadra,
      found: false,
      xCoord: [52, 55],
      yCoord: [100, 112],
    },
    {
      name: 'Magikarp',
      profile: Magikarp,
      found: false,
      xCoord: [55, 58],
      yCoord: [84, 88],
    },
    {
      name: 'Cubone',
      profile: Cubone,
      found: false,
      xCoord: [39, 41],
      yCoord: [68, 75],
    },
    {
      name: 'Oddish',
      profile: Oddish,
      found: false,
      xCoord: [61, 63],
      yCoord: [111, 114],
    },
    {
      name: 'Nidoran',
      profile: Nidoran,
      found: false,
      xCoord: [50, 54],
      yCoord: [46, 53],
    },
    {
      name: 'Poliwhirl',
      profile: Poliwhirl,
      found: false,
      xCoord: [53, 55],
      yCoord: [42, 47],
    },
  ],
};
const Two = {
  level: 2,
  name: 'Olivine Lighthouse',
  board: TowerLevel,
  cover: 'https://archives.bulbagarden.net/media/upload/5/57/Glitter_Lighthouse_HGSS.png',
  characters: [
    {
      name: 'Natu',
      profile: Natu,
      found: false,
      xCoord: [19, 22],
      yCoord: [65, 74],
    },
    {
      name: 'Onix',
      profile: Onix,
      found: false,
      xCoord: [61, 64],
      yCoord: [110, 116],
    },
    {
      name: 'Igglybuff',
      profile: Igglybuff,
      found: false,
      xCoord: [41, 43],
      yCoord: [60, 64],
    },
    {
      name: 'Alakazam',
      profile: Alakazam,
      found: false,
      xCoord: [26, 30],
      yCoord: [112, 123],
    },
    {
      name: 'Venomoth',
      profile: Venomoth,
      found: false,
      xCoord: [28, 33],
      yCoord: [47, 53],
    },
    {
      name: 'Larvitar',
      profile: Larvitar,
      found: false,
      xCoord: [75, 76],
      yCoord: [105, 112],
    },
    {
      name: 'Ekans',
      profile: Ekans,
      found: false,
      xCoord: [39, 41],
      yCoord: [62, 79],
    },
    {
      name: 'Houndour',
      profile: Houndour,
      found: false,
      xCoord: [57, 60],
      yCoord: [40, 52],
    },
    {
      name: 'Dugtrio',
      profile: Dugtrio,
      found: false,
      xCoord: [36, 38],
      yCoord: [84, 92],
    },
  ],
};
const levelData = [
  Zero,
  One,
  Two,
];

export default levelData;
