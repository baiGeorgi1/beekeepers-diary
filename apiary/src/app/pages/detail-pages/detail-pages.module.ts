import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "src/app/shared/shared.module";

import { CoreModule } from "src/app/core/core.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "home", component: HomeComponent }];
@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        SharedModule,
        CoreModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
})
export class DetailPagesModule {}
