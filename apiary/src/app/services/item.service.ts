import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";
import { Hives } from "../types/hives";
import { Observable } from "rxjs";
import { Tasks } from "../types/tasks";

const { itemURL, taskURL } = environment;
@Injectable({
    providedIn: "root",
})
export class ItemService {
    constructor(private http: HttpClient) {}
    //todo

    getUserHives(): Observable<Hives[]> {
        return this.http.get<Hives[]>(`${itemURL}`);
    }
    getHive(id: string) {
        return this.http.get<Hives>(`${itemURL}/${id}`);
    }
    updateHive(
        hive: Hives,
        id: string,
        hiveType: string,
        mother: string,
        brood: number,
        bees: number,
    ): Observable<Hives> {
        return this.http.put<Hives>(`${itemURL}/${id}`, {
            ...hive,
            hiveType,
            mother,
            brood,
            bees,
        });
    }
    createHive(data: Hives): Observable<Hives> {
        const token = environment.USER_KEY;

        return this.http.post<Hives>(`${itemURL}`, data, {
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token,
            },
        });
    }

    deleteHive(hiveId: string): Observable<unknown> {
        const URL = `${itemURL}/${hiveId}`;
        return this.http.delete<unknown>(URL);
    }
    // ** TaskService
    getUserTasks(): Observable<Tasks[]> {
        return this.http.get<Tasks[]>(`${taskURL}`);
    }
    createTask(data: Tasks): Observable<Tasks> {
        const token = environment.USER_KEY;

        return this.http.post<Tasks>(`${taskURL}`, data, {
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": token,
            },
        });
    }
}
