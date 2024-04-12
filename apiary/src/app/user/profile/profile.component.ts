import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemService } from "src/app/services/item.service";
import { UserService } from "src/app/services/user.service";
import { Tasks } from "src/app/types/tasks";
import { Profile, UserForAuth } from "src/app/types/user";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
    user!: UserForAuth;
    tasks: Tasks[] = [];

    editMode: boolean = false;

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private api: ItemService,
    ) {}
    public get userId(): string {
        return this.userService.getUser()!._id;
    }

    ngOnInit(): void {
        this.api.getUserTasks().subscribe({
            next: (task) => {
                for (const key in task) {
                    if (this.userId == task[key]._ownerId) {
                        this.tasks.push(task[key]);
                        console.log(task[key]);
                    }
                }
            },
        });
    }
    onEdit(): void {}
    cancel(): void {}

    onSave(): void {}
}
