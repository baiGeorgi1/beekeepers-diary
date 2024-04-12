import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
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
    @Input() isTask!: boolean;
    @Output() @Output() isInfoChanged = new EventEmitter<boolean>();
    @Output() @Output() isTaskChanged = new EventEmitter<boolean>();

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

        console.log(this.task);

        this.subscribe$ = this.api.createTask(this.task).subscribe({
            next: (task) => {
                console.log(task);
            },
            error: () => {},
        });
    }

    onCancel(): void {
        this.isInfoChanged.emit(!this.isInfo);
        this.isTaskChanged.emit(!this.isTask);
    }
    ngOnDestroy(): void {
        if (this.subscribe$ != undefined) {
            this.subscribe$.unsubscribe();
        }
    }
}
