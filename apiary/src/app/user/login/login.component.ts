import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent {
    constructor(private userService: UserService, private router: Router) {}
    login(form: NgForm) {
        console.log(form.value);
        if (form.invalid) {
            return;
        }
        this.userService.login();
        this.router.navigate(["/dashboard"]);
    }
}
