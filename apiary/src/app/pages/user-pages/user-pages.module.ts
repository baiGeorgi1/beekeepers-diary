import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "login/", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "logout", component: LogoutComponent },
];

@NgModule({
    declarations: [LoginComponent, LogoutComponent, RegisterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserPagesModule {}
