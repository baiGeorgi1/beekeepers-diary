import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';
import { Hives } from 'src/app/types/hives';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  hives: Hives[] = [];

  constructor(private api: ItemService, private userService: UserService) {}

  public get userId(): string {
    return this.userService.getUser()!._id;
  }

  ngOnInit(): void {
    this.api.getUserHives().subscribe({
      next: (hive) => {
        for (const key in hive) {
          if (this.userId == hive[key]._ownerId) {
            this.hives.push(hive[key]);
          }
        }
      },
      error: () => {},
      complete: () => {
        console.log(this.hives);
      },
    });
  }
}
