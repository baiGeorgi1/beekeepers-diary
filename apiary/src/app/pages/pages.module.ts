import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageRoutingModule } from "./page-routing.module";
import { AddHiveComponent } from "./add-hive/add-hive.component";
import { InfoComponent } from "./info/info.component";
import { TasksComponent } from "./tasks/tasks.component";
import { HiveDetailsComponent } from "./hive-details/hive-details.component";
import { TaskInfoComponent } from "./task-info/task-info.component";

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        AddHiveComponent,
        InfoComponent,
        TasksComponent,
        HiveDetailsComponent,
        TaskInfoComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        PageRoutingModule,
    ],
})
export class PagesModule {}
