import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";

import { DirectivesModule } from "./directives/directives.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreModule,
        DirectivesModule,
        SharedModule,
        UserModule,
        PagesModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
