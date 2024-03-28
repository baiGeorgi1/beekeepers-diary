import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { emailValidator } from "src/app/shared/utils/email-validator";
import { matchPasswords } from "src/app/shared/utils/match-passwords";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
    mandatoryFields: boolean = true;

    form = this.fb.group({
        email: ["", [Validators.required, emailValidator()]],
        username: ["", [Validators.required, Validators.minLength(4)]],
        passGroup: this.fb.group(
            {
                password: ["", [Validators.required, Validators.minLength(4)]],
                "repeat-password": [
                    "",
                    [Validators.required, Validators.minLength(4)],
                ],
            },
            {
                validators: [matchPasswords("password", "repeat-password")],
            },
            // TODO Validators
        ),
    });
    constructor(private fb: FormBuilder) {}

    register(): void {
        if (this.form.invalid) {
            return;
        }
        console.log(this.form.value);
    }
}
