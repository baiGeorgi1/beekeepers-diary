import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-hive',
  templateUrl: './add-hive.component.html',
  styleUrls: ['./add-hive.component.css'],
})
export class AddHiveComponent {
  @Input() isInfo!: boolean;
  @Input() isCreateHive!: boolean;
  @Output() isInfoChanged = new EventEmitter<boolean>();
  @Output() isCreateHiveChanged = new EventEmitter<boolean>();

  subscribe$!: Subscription;
  errorMsg!: string;

  constructor(
    private userService: UserService,
    private api: ItemService,
    private router: Router
  ) {}

  public get userId(): string {
    return this.userService.getUser()._id;
  }

  addHive(addForm: NgForm) {
    // console.log('IsINfo:', this.isInfo);

    if (addForm.invalid) {
      return;
    }
    const data = addForm.value;
    data.userId = this.userId;
    this.subscribe$ = this.api.createHive(data).subscribe({
      next: () => {
        alert('Кошерът е добавен успешно');
        this.isInfo = !this.isInfo;
        this.isCreateHive = !this.isCreateHive;
        this.isInfoChanged.emit(this.isInfo);
        this.isCreateHiveChanged.emit(this.isCreateHive);
        addForm.reset();
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
      complete: () => {},
    });
  }
}
