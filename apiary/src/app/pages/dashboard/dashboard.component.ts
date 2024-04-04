import { Component, OnInit } from '@angular/core';

import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { Hives } from 'src/app/types/hives';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hives: Hives[] = [];
  currentPage: boolean = true;

  get userId(): string {
    return this.userService.getUser()._id || '';
  }

  constructor(
    private globalLoader: GlobalLoaderService,
    private userService: UserService,
    private api: ItemService
  ) {}
  ngOnInit(): void {
    // this.globalLoader.showLoader();
    // setTimeout(() => {
    //     this.globalLoader.hideLoader();
    // }, 2500);

    const result = this.api.getItems(this.userId).subscribe({
      next: (items: Hives[]) => {
        console.log('ITEMS', items, this.userId);
      },
      complete: () => {
        // console.log("Completed: ", this.hives);
      },
    });
  }

  clicked(event: any) {
    const target = event.target.parentElement;
    const vertNavBtns = document.querySelectorAll('.vert-nav');
    for (let i = 0; i < vertNavBtns.length; i++) {
      const item = vertNavBtns[i].parentElement;
      console.log(item);
      item!.classList.remove('active');
    }
    target.classList.add('active');
    console.log(target);
    console.log(vertNavBtns);
  }
}
