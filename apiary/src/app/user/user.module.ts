import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
})
export class UserModule {}
