import { Component, OnInit } from "@angular/core";
import { GlobalLoaderService } from "src/app/core/global-loader/global-loader.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    constructor(private globalLoader: GlobalLoaderService) {}

    ngOnInit(): void {
        //todo use this for fetchng - not here
        this.globalLoader.showLoader();
        // setTimeout(() => {
        this.globalLoader.hideLoader();
        //}, 2500);
    }
}
