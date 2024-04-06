import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Hives } from '../types/hives';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const { itemURL } = environment;
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getHives(): Observable<Hives[]> {
    const { itemURL } = environment;
    return this.http.get<Hives[]>(`${itemURL}/hives`);
  }
  getHivesP(userId: string): Observable<Hives[]> {
    const res = this.http.get<Hives[]>(`${itemURL}/hives`);
    console.log('RESPONSE:', res);

    return res;
  }

  getItems(userId: string): Observable<Hives[]> {
    //TODO
    console.log('HERE', userId);
    return this.http.get<Hives[]>(`${itemURL}/hives`);
  }
}
