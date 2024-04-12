import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageRoutingModule } from "./page-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AddHiveComponent } from "./add-hive/add-hive.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfoComponent } from "./info/info.component";
import { TasksComponent } from "./tasks/tasks.component";
import { HiveDetailsComponent } from "./hive-details/hive-details.component";

@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        NotFoundComponent,
        AddHiveComponent,
        InfoComponent,
        TasksComponent,
        HiveDetailsComponent,
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
