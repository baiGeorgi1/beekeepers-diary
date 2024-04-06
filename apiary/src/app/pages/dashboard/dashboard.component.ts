import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { Hives } from 'src/app/types/hives';

import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hives: Hives[] = [];
  isOwner!: boolean;

  // vertical nav
  isInfo: boolean = true;
  isCreateHive: boolean = false;
  isTask: boolean = false;
  //  add-hive
  form = this.fb.group({});

  get userId(): string {
    return this.userService.getUser()._id || '';
  }

  constructor(
    private globalLoader: GlobalLoaderService,
    private userService: UserService,
    private api: ItemService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // this.globalLoader.showLoader();
    // setTimeout(() => {
    //     this.globalLoader.hideLoader();
    // }, 2500);

    //todo - working
    // this.api.getHives().subscribe({
    //   next: (hives) => {
    //     Object.entries(hives).forEach((e) => {
    //       console.log(e);

    //       this.hives.push(e[1]);
    //     });
    //   },
    //   error: () => {},
    //   complete: () => {
    //     console.log('Type:', this.hives);
    //   },
    // });

    this.api.getHivesP(this.userId).subscribe({
      next: (hive) => {
        for (const key in hive) {
          if (this.userId == hive[key].userId) {
            console.log(hive[key]);
            this.hives.push(hive[key]);
          }
        }
      },
      error: () => {},
      complete: () => {},
    });
  }

  addHive() {}

  // ** Vertical nav
  clicked(event: any) {
    const target = event.target.parentElement;
    const vertNavBtns = document.querySelectorAll('.vert-nav');
    for (let i = 0; i < vertNavBtns.length; i++) {
      const item = vertNavBtns[i].parentElement;

      item!.classList.remove('active');
    }
    target.classList.add('active');
    const id = target.id;

    switch (id) {
      case 'info':
        this.isInfo = true;
        this.isCreateHive = false;
        this.isTask = false;
        break;
      case 'create-hive':
        this.isInfo = false;
        this.isCreateHive = true;
        this.isTask = false;

        break;
      case 'tasks':
        this.isInfo = false;
        this.isCreateHive = false;
        this.isTask = true;
        break;

      default:
        break;
    }
  }
}
