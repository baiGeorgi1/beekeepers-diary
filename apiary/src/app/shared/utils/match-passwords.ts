import { ValidatorFn } from "@angular/forms";

export function matchPasswords(
    password: string,
    rePasswordControlName: string,
): ValidatorFn {
    return (control) => {
        const passwordControl = control.get(password);
        const rePasswordControl = control.get(rePasswordControlName);

        const matching = passwordControl?.value === rePasswordControl?.value;

        return matching ? null : { matchPasswords: true };
    };
}
