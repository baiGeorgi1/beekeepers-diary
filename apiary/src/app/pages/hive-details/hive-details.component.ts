import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { ItemService } from 'src/app/services/item.service';
import { Hives } from 'src/app/types/hives';

@Component({
  selector: 'app-hive-details',
  templateUrl: './hive-details.component.html',
  styleUrls: ['./hive-details.component.css'],
})
export class HiveDetailsComponent implements OnInit {
  subscribe$!: Subscription;
  errorMessage!: string;
  hive!: Hives;
  form = this.fb.group({
    hiveType: ['', Validators.required],
    mother: ['', Validators.required],
    brood: [0, Validators.required],
    bees: [0, Validators.required],
  });
  // hive = {} as Hives;

  editMode: boolean = false;
  deleteMode: boolean = false;
  hiveId: string = '';

  constructor(
    private fb: FormBuilder,
    private api: ItemService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.hiveId = data['hive-details'];
      this.api.getHive(this.hiveId).subscribe((hive) => {
        this.hive = hive;
        console.log(hive);
      });
    });

    this.form.setValue({
      hiveType: this.hive.hiveType,
      mother: this.hive.mother,
      brood: this.hive.brood,
      bees: this.hive.bees,
    });
  }
  changeView(): void {
    this.editMode = true;
  }
  onCancel(): void {
    this.editMode = false;
    this.deleteMode = false;
  }
  save() {
    console.log('Invoked: ', this.form.value);

    if (this.form.invalid) {
      return;
    }
    this.hive = this.form.value as Hives;
    const { hiveType, mother, brood, bees } = this.hive;
    this.api
      .updateHive(this.hiveId, hiveType, mother, brood, bees)
      .subscribe(() => {
        this.editMode = false;
      });
  }
  onDelete(hiveId: string): void {
    this.editMode = false;
    this.deleteMode = true;

    this.subscribe$ = this.api.deleteHive(hiveId).subscribe({
      error: (error) => (this.errorMessage = error.error.mesage),
      complete: () => this.router.navigate(['dashboard/info']),
    });
  }
}
