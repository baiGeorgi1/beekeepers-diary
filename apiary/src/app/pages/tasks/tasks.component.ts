import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
    @Input() isInfo!: boolean;
    @Input() isTask!: boolean;
    @Output() @Output() isInfoChanged = new EventEmitter<boolean>();
    @Output() @Output() isTaskChanged = new EventEmitter<boolean>();

    onCancel(): void {
        console.log("Task");

        this.isInfoChanged.emit(!this.isInfo);
        this.isTaskChanged.emit(!this.isTask);
    }
}
