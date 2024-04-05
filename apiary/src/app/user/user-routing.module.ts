import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { loggedInGuard } from "../guards/is-Logged.guard";
import { guestGuard } from '../guards/is-guest';
import { loggedInGuard } from '../guards/is-logged.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'users/login',
    canActivate: [guestGuard],
    component: LoginComponent,
  },
  {
    path: 'users/register',
    canActivate: [guestGuard],
    component: RegisterComponent,
  },
  {
    path: 'users/profile',
    canActivate: [loggedInGuard],
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
