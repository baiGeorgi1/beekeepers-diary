import { Component, DoCheck, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { UserService } from "src/app/services/user.service";
import { Hives } from "src/app/types/hives";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    template:
        '<app-add-hive ([isInfo])="isInfo" ([isCreateHive])="isCreateHive"></app-add-hive>',
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, DoCheck {
    hives: Hives[] = [];
    isOwner!: boolean;
    subscribe$!: Subscription;
    errorMsg!: string;

    // vertical nav
    public isInfo: boolean = true;
    public isCreateHive: boolean = false;
    public isTask: boolean = false;

    get userId(): string {
        return this.userService.getUser()._id || "";
    }

    constructor(private userService: UserService) {}
    ngOnInit(): void {
        // this.globalLoader.showLoader();
        // setTimeout(() => {
        //     this.globalLoader.hideLoader();
        // }, 2500);
        this.isInfo = true;
        this.isCreateHive = false;
        this.isTask = false;
    }

    ngDoCheck() {
        if (this.isInfo) {
            document.getElementById("info")?.classList.add("active");
            document.getElementById("create-hive")?.classList.remove("active");
            document.getElementById("tasks")?.classList.remove("active");
        }
    }

    // ** Vertical nav
    clicked(event: any) {
        const target = event.target.parentElement;
        const vertNavBtns = document.querySelectorAll(".vert-nav");
        for (let i = 0; i < vertNavBtns.length; i++) {
            const item = vertNavBtns[i].parentElement;

            item!.classList.remove("active");
        }
        target.classList.add("active");
        const id = target.id;

        switch (id) {
            case "info":
                this.isInfo = true;
                this.isCreateHive = false;
                this.isTask = false;
                break;
            case "create-hive":
                this.isInfo = false;
                this.isCreateHive = true;
                this.isTask = false;

                break;
            case "tasks":
                this.isInfo = false;
                this.isCreateHive = false;
                this.isTask = true;
                break;

            default:
                break;
        }
    }
}
