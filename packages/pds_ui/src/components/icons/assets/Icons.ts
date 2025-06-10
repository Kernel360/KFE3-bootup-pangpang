import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from 'react-icons/fa6';

import { GoBellFill, GoBell, GoHeartFill, GoHeart } from 'react-icons/go';
import { BsClockFill, BsClock } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdRefresh } from 'react-icons/md';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

export const ICONS = {
  FaAngleDown: FaAngleDown,
  FaAngleLeft: FaAngleLeft,
  FaAngleRight: FaAngleRight,
  FaAngleUp: FaAngleUp,

  GoBellFill: GoBellFill,
  GoBell: GoBell,
  GoHeartFill: GoHeartFill,
  GoHeart: GoHeart,

  BsClockFill: BsClockFill,
  BsClock: BsClock,

  RxHamburgerMenu: RxHamburgerMenu,

  MdRefresh: MdRefresh,

  PiMagnifyingGlassBold: PiMagnifyingGlassBold,
};

export type IconName = keyof typeof ICONS;
