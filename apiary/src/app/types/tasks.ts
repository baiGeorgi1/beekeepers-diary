import { User } from "./user";

export interface Tasks {
    _id: string;
    task: string;
    userId: User[];
    _ownerId: string;
    _createdOn: number;
}
