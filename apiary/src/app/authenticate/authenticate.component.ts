import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

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
                this.isAuthenticated = true;
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
