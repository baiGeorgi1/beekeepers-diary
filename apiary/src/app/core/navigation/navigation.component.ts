import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent {
    constructor(private userService: UserService, private router: Router) {}

    get isLoggeedIn(): boolean {
        return this.userService.isLogged;
    }
    get username(): string {
        return this.userService.user?.username || "";
    }

    logout() {
        this.userService.logout();
        this.router.navigate(["/home"]);
    }
}
