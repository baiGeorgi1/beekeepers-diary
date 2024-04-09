import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Hives } from 'src/app/types/hives';

@Component({
  selector: 'app-hive-details',
  templateUrl: './hive-details.component.html',
  styleUrls: ['./hive-details.component.css'],
})
export class HiveDetailsComponent implements OnInit {
  form = this.fb.group({});
  hive = {} as Hives;

  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private api: ItemService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['hive-details'];
      this.api.getHive(id).subscribe((hive) => {
        this.hive = hive;
        console.log(hive);
      });
    });
  }
  editDetails(): void {
    this.editMode = true;
  }
  cancel(): void {
    this.editMode = false;
  }
  save(): void {}
}
