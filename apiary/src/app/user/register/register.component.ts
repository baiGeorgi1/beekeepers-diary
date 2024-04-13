import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { emailValidator } from "src/app/shared/utils/email-validator";
import { matchPasswords } from "src/app/shared/utils/match-passwords";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
    errorMessage!: string;
    mandatoryFields: boolean = true;

    form = this.fb.group({
        email: ["", [Validators.required, emailValidator()]],
        username: ["", [Validators.required, Validators.minLength(4)]],
        passGroup: this.fb.group(
            {
                password: ["", [Validators.required, Validators.minLength(4)]],
                repeatPassword: [
                    "",
                    [Validators.required, Validators.minLength(4)],
                ],
            },
            {
                validators: [matchPasswords("password", "repeatPassword")],
            },
        ),
    });
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router,
    ) {}

    register(): void {
        if (this.form.invalid) {
            return;
        }
        // console.log(this.form.value);
        const {
            email,
            username,
            passGroup: { password, repeatPassword } = {},
        } = this.form.value;

        this.userService.userSubscribtion = this.userService
            .register(email!, username!, password!, repeatPassword!)
            .subscribe({
                next: (userData) => {
                    this.userService.setUser(userData);
                    this.router.navigate(["/dashboard"]);
                },
                error: (err) => (this.errorMessage = err.error.mesage),
            });
    }
}
