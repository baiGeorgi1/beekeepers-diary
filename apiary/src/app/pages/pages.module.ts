import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageRoutingModule } from './page-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddHiveComponent } from './add-hive/add-hive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    NotFoundComponent,
    AddHiveComponent,
  ],
  imports: [CommonModule, SharedModule, PageRoutingModule, ReactiveFormsModule],
})
export class PagesModule {}
