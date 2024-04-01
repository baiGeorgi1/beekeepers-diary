import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-authenticate",
    templateUrl: "./authenticate.component.html",
    styleUrls: ["./authenticate.component.css"],
})
export class AuthenticateComponent implements OnInit {
    //
    isAuthenticated = true;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService.getUser().subscribe({
            next: () => {
                this.isAuthenticated = false;
            },
            error: () => {
                this.isAuthenticated = false;
            },
            complete: () => {
                this.isAuthenticated = false;
            },
        });
    }
}
