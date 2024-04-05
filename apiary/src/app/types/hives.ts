import { User } from './user';

export interface Hives {
  _id: string;
  type: string;
  frames: number;
  hiveNumber: number;
  userId: User[];
}

// export interface Hives {
//     _id: string;
//     name: string;

//     age: string;
// }
