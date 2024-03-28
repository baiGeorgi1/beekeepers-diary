import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
    mandatoryFields: boolean = true;

    form = this.fb.group({
        email: ["", [Validators.required]],
        username: ["", [Validators.required, Validators.minLength(4)]],
        passGroup: this.fb.group(
            {
                password: ["", [Validators.required, Validators.minLength(4)]],
                "repeat-password": [
                    "",
                    [Validators.required, Validators.minLength(4)],
                ],
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
