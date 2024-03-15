import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { GlobalLoaderComponent } from "./global-loader/global-loader.component";

@NgModule({
    declarations: [NavigationComponent, FooterComponent, GlobalLoaderComponent],
    imports: [CommonModule, RouterModule, SharedModule],
    exports: [NavigationComponent, FooterComponent, GlobalLoaderComponent],
})
export class CoreModule {}
