import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";

import { Router } from "@angular/router";
import { emailValidator } from "src/app/shared/utils/email-validator";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
    form = this.fb.group({
        email: ["", [Validators.required, emailValidator()]],
        password: ["", [Validators.required]],
    });

    constructor(
        private title: Title,
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.title.setTitle("Login");
    }

    login(): void {
        // console.log(this.form.value);
        if (this.form.invalid) {
            return;
        }
        const { email, password } = this.form.value;
        this.userService.userSubscribtion = this.userService
            .login(email!, password!)
            .subscribe({
                next: (userData) => {
                    this.userService.setUser(userData);
                    this.router.navigate(["/dashboard"]);
                },
                //TODO
                error: () => {},
            });
    }
    ngOnDestroy(): void {
        if (this.userService.userSubscribtion != undefined) {
            this.userService.userSubscribtion.unsubscribe();
        }
    }
}
