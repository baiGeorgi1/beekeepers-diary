import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageRoutingModule } from "./page-routing.module";

@NgModule({
    declarations: [HomeComponent, DashboardComponent],
    imports: [CommonModule, SharedModule, PageRoutingModule],
})
export class PagesModule {}
