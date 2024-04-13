import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ItemService } from "src/app/services/item.service";
import { Tasks } from "src/app/types/tasks";

@Component({
    selector: "app-task-info",
    templateUrl: "./task-info.component.html",
    styleUrls: ["./task-info.component.css"],
})
export class TaskInfoComponent implements OnInit, OnDestroy {
    subscribe$!: Subscription;
    errorMessage!: string;
    task = {} as Tasks;
    taskId: string = "";

    constructor(
        //private fb: FormBuilder,
        private api: ItemService,
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) {}
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.taskId = data["task"];
            this.subscribe$ = this.api.getTask(this.taskId).subscribe({
                next: (task) => {
                    console.log(task);

                    this.task = task;
                },
                error: (err) => (this.errorMessage = err.error.message),
            });
        });
    }
    ngOnDestroy(): void {
        if (this.subscribe$ != undefined) {
            this.subscribe$.unsubscribe();
        }
    }
}
