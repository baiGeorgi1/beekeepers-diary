import { Hives } from './hives';
import { Tasks } from './tasks';

export interface User {
  _id: string;
  email: string;
  username: string;
  password: string;
  hives: Hives[];
  tasks: Tasks[];
}
export interface UserForAuth {
  email: string;
  username: string;
  password: string;
  _id: string;
  accessToken: string;
}
export interface Profile {
  email: string;
  username: string;
}
