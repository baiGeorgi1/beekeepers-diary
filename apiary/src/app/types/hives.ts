import { User } from './user';

export interface Hives {
  hiveType: string;
  hiveNumber: number;
  frames: number;
  bees: number;
  mother: string;
  brood: number;
  _id: string;
  _ownerId: string;
}
