import { User } from './user';

export interface Hives {
  _id: string;
  hiveType: string;
  frames: number;
  hiveNumber: number;
  userId: string;
  bees: number;
  mother?: string;
  brood?: number;
}

export interface HiveDetails {
  _id: string;
  hiveType: string;
  frames: number;
  bees?: number;
}
