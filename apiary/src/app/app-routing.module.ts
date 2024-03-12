import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/detail-pages/home/home.component";
import { DetailPagesModule } from "./pages/detail-pages/detail-pages.module";
import { UserPagesModule } from "./pages/user-pages/user-pages.module";
import { PagesModule } from "./pages/pages.module";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "user", component: PagesModule },
    { path: "detail", component: PagesModule },
];

@NgModule({
    imports: [PagesModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
