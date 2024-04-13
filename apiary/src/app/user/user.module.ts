import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile/profile.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [LoginComponent, RegisterComponent, ProfileComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [],
})
export class UserModule {}
