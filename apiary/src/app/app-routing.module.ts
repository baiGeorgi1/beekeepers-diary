import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./core/errorHandling/error.component";

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    {
        path: "auth",
        loadChildren: () =>
            import("./user/user.module").then((m) => m.UserModule),
    },
    { path: "404", component: ErrorComponent },
    { path: "**", redirectTo: "/404" },
    // { path: '404', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
