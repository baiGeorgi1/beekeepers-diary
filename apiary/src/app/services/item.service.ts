import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Hives } from '../types/hives';
import { Observable } from 'rxjs';

const { itemURL } = environment;
@Injectable({
  providedIn: 'root',
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
  createHive(data: Hives): Observable<Hives> {
    const token = environment.USER_KEY;

    return this.http.post<Hives>(`${itemURL}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
    });
  }

  getItems(userId: string): Observable<Hives[]> {
    //TODO
    console.log('HERE', userId);
    return this.http.get<Hives[]>(`${itemURL}/hives`);
  }
}
