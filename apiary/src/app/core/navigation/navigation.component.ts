import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

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
        return this.userService.getUser()?.username || "";
    }

    logout() {
        this.userService.logout().subscribe({
            next: () => {
                this.userService.clearUser();
                this.router.navigate(["/login"]);
            },
            error: () => {
                this.userService.clearUser();
                this.router.navigate(["/login"]);
            },
            complete: () => {
                this.userService.clearUser();
                this.router.navigate(["/home"]);
            },
        });
    }
}
