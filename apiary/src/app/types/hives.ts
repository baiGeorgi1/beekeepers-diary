import { User } from "./user";

export interface Hives {
    _id: string;
    type: string;
    frames: string;
    userId: User;
}
