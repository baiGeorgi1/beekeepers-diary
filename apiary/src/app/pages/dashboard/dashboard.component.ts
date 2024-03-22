import { Component, OnInit } from "@angular/core";
import { GlobalLoaderComponent } from "src/app/core/global-loader/global-loader.component";
import { GlobalLoaderService } from "src/app/core/global-loader/global-loader.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    constructor(private globalLoader: GlobalLoaderService) {}
    ngOnInit(): void {
        this.globalLoader.showLoader();
        setTimeout(() => {
            this.globalLoader.hideLoader();
        }, 2500);
    }
}
