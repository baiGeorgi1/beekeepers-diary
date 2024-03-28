import { Injectable } from "@angular/core";
import { UserForAuth } from "./types/user";

@Injectable({
    providedIn: "root",
})
export class UserService {
    user: UserForAuth | undefined;
    USER_KEY = "[user]";

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor() {
        try {
            const localUser = localStorage.getItem(this.USER_KEY) || "";
            this.user = JSON.parse(localUser);
        } catch (error) {
            this.user = undefined;
        }
    }

    login() {
        this.user = {
            id: "12121212",
            username: "Gogo",
            password: "123",
        };
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }
    logout() {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
    }
}
