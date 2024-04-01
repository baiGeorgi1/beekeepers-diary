import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";

import { DirectivesModule } from "./directives/directives.module";
// import { AppInterceptor } from "./app.interceptor";
import { AuthenticateComponent } from "./authenticate/authenticate.component";
import { appInterceptorProvider } from "./app.interceptor";
// import { appInterceptorProvider } from "./app.interceptor";

@NgModule({
    declarations: [AppComponent, AuthenticateComponent],
    imports: [
        BrowserModule,
        CoreModule,
        HttpClientModule,
        DirectivesModule,
        SharedModule,
        UserModule,
        PagesModule,
        AppRoutingModule,
    ],
    providers: [appInterceptorProvider], // TODO add AppInterceptorProvider
    bootstrap: [AppComponent],
})
export class AppModule {}
