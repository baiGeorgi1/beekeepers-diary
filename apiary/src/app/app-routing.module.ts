import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    // { path: "home", component: HomeComponent },
    // { path: "user", component: PagesModule },
    // { path: "detail", component: PagesModule },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
