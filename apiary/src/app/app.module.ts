import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routes } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { PagesModule } from "./pages/pages.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
