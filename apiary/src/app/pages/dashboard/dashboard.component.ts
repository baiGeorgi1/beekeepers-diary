import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    ViewChildren,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalLoaderService } from "src/app/core/global-loader/global-loader.service";
import { ItemService } from "src/app/services/item.service";
import { UserService } from "src/app/services/user.service";
import { Hives } from "src/app/types/hives";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
    hives: Hives[] = [];
    // todo navigation
    isActive: boolean = false;

    get userId(): string {
        return this.userService.getUser()._id || "";
    }

    constructor(
        private elRef: ElementRef,
        private globalLoader: GlobalLoaderService,
        private userService: UserService,
        private api: ItemService,
    ) {}
    ngOnInit(): void {
        // this.globalLoader.showLoader();
        // setTimeout(() => {
        //     this.globalLoader.hideLoader();
        // }, 2500);

        const result = this.api.getItems(this.userId).subscribe({
            next: (items: Hives[]) => {
                console.log("ITEMS", items, this.userId);
            },
            complete: () => {
                //TODO
                console.log("Completed: ", this.hives);
            },
        });
        // .subscribe((items) => {
        //     console.log("ITEMS:", items);
        //     items.forEach((item) => {
        //         console.log(item.frames);

        //         // find((s)=>{s===this.userId})
        //     })
        // });
    }
    // @ViewChildren("el") a!: ElementRef;
    // ngAfterViewInit(): void {
    //     console.log("Here");

    //     this.a.nativeElement.setAttribute("active");
    // }

    // isActiveFn(event: object) {
    //     console.log(event);
    //     const res = this.elRef.parenElement.setAttribute
    //     console.log(res);

    //     //event.parentElement.srcElement.classList.add("active");
    // }
}
