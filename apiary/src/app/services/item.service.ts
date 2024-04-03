import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { Hives } from "../types/hives";
import { Observable, Subscription, map } from "rxjs";
import { UserService } from "./user.service";

const { itemURL } = environment;
@Injectable({
    providedIn: "root",
})
export class ItemService {
    constructor(private http: HttpClient, private userService: UserService) {}
    result$!: Subscription;
    getItems(userId: string): Observable<Hives[]> {
        //TODO
        console.log("HERE", userId);

        this.result$ = this.http.get<Hives[]>(`${itemURL}/hives`).subscribe({
            next: (item) => {
                console.log(item);
            },
        });
    }
}
