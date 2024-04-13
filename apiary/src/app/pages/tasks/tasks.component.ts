import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { ItemService } from "src/app/services/item.service";
import { Tasks } from "src/app/types/tasks";

@Component({
    selector: "app-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnDestroy {
    @Input() isInfo!: boolean;
    @Output() @Output() isInfoChanged = new EventEmitter<boolean>();

    task = {} as Tasks;
    subscribe$!: Subscription;
    form = this.fb.group({
        task: ["", Validators.required],
    });

    constructor(private fb: FormBuilder, private api: ItemService) {}

    addTask() {
        if (this.form.invalid) {
            return;
        }
        this.task = this.form.value as Tasks;

        this.subscribe$ = this.api.createTask(this.task).subscribe({
            next: () => {
                this.isInfoChanged.emit(!this.isInfo);

                this.form.reset();
            },
            error: () => {},
        });
    }

    onCancel(): void {
        this.isInfoChanged.emit(!this.isInfo);
    }
    ngOnDestroy(): void {
        if (this.subscribe$ != undefined) {
            this.subscribe$.unsubscribe();
        }
    }
}
