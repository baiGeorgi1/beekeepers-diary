import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { loggedInGuard } from '../guards/is-logged.guard';
import { AddHiveComponent } from './add-hive/add-hive.component';
import { InfoComponent } from './info/info.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard/info',
    canActivate: [loggedInGuard],
    component: DashboardComponent,
  },
  {
    path: 'dashboard/add-hive',
    canActivate: [loggedInGuard],
    component: AddHiveComponent,
  },
  {
    path: 'dashboard/tasks',
    canActivate: [loggedInGuard],
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
