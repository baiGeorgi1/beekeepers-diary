import { Hives } from "./hives";
import { Tasks } from "./tasks";

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    hives: Hives[];
    tasks: Tasks[];
}
export interface UserForAuth {
    username: string;
    password: string;
    id: string;
}
