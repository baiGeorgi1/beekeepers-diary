import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { ItemService } from "src/app/services/item.service";
import { Hives } from "src/app/types/hives";

@Component({
    selector: "app-hive-details",
    templateUrl: "./hive-details.component.html",
    styleUrls: ["./hive-details.component.css"],
})
export class HiveDetailsComponent implements OnInit, OnDestroy {
    subscribe$!: Subscription;
    errorMessage!: string;

    form = this.fb.group({
        hiveType: ["", Validators.required],
        mother: ["", Validators.required],
        brood: [0, Validators.required],
        bees: [0, Validators.required],
    });
    hive = {} as Hives;

    editMode: boolean = false;
    deleteMode: boolean = false;
    hiveId: string = "";

    constructor(
        private fb: FormBuilder,
        private api: ItemService,
        private router: Router,
        private activeRoute: ActivatedRoute,
    ) {}
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.hiveId = data["hive-details"];
            this.subscribe$ = this.api.getHive(this.hiveId).subscribe({
                next: (hive) => {
                    this.hive = hive;
                    console.log(this.hive);

                    console.log("Frames:", this.hive.frames);

                    this.form.setValue({
                        hiveType: this.hive.hiveType,
                        mother: this.hive.mother,
                        brood: this.hive.brood,
                        bees: this.hive.bees,
                    });
                },
                error: (err) => (this.errorMessage = err.error.message),
            });
        });
    }
    // BUTONS
    changeView(): void {
        this.editMode = true;
    }
    onCancel(): void {
        this.editMode = false;
        this.deleteMode = false;
    }
    save() {
        if (this.form.invalid) {
            return;
        }

        this.hive = { ...this.hive, ...this.form.value } as Hives;
        console.log("before save", this.hive);

        const { hiveType, mother, brood, bees } = this.hive;
        this.subscribe$ = this.api
            .updateHive(
                this.hive,
                this.hiveId,
                (this.hive.hiveType = hiveType),
                (this.hive.mother = mother),
                (this.hive.brood = brood),
                (this.hive.bees = bees),
            )
            .subscribe({
                next: () => (this.editMode = false),
                error: (err) => (this.errorMessage = err.error.mesage),
            });
    }
    onDelete(hiveId: string): void {
        this.editMode = false;
        this.deleteMode = true;

        this.subscribe$ = this.api.deleteHive(hiveId).subscribe({
            error: (error) => (this.errorMessage = error.error.mesage),
            complete: () => this.router.navigate(["dashboard/info"]),
        });
    }
    ngOnDestroy(): void {
        if (this.subscribe$ != undefined) {
            this.subscribe$.unsubscribe();
        }
    }
}
