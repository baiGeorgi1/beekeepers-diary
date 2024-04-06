import {
  Injectable,
  OnDestroy,
  ɵpublishDefaultGlobalUtils,
} from '@angular/core';
import { Profile, User, UserForAuth } from '../types/user';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

const { userURL, USER_KEY } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;
  userSubscribtion: Subscription;

  get isLogged(): boolean {
    const token = localStorage.getItem(USER_KEY);
    if (token) {
      return true;
    }
    // return !!this.user;
    return false;
  }

  constructor(private http: HttpClient) {
    this.userSubscribtion = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  login(email: string, password: string): Observable<UserForAuth> {
    return this.http
      .post<UserForAuth>(`${userURL}/login`, {
        email,
        password,
      })
      .pipe(
        tap((user) => {
          this.user$$.next(user);
          console.log(user);
        })
      );
  }

  register(
    email: string,
    username: string,
    password: string,
    repeatPassword: string
  ): Observable<UserForAuth> {
    return this.http
      .post<UserForAuth>(`${userURL}/register`, {
        email,
        username,
        password,
        repeatPassword,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .get(`${userURL}/logout`, {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }
  getUser() {
    const token = localStorage.getItem(USER_KEY);
    if (token) {
      return JSON.parse(token);
    }
    return this.http
      .get<UserForAuth>(`${userURL}/me`)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  setUser(data: UserForAuth): void {
    localStorage.setItem(environment.USER_KEY, JSON.stringify(data));
  }
  clearUser(): void {
    localStorage.removeItem(USER_KEY);
  }
  //   ngOnDestroy(): void {
  //     this.userSubscribtion.unsubscribe();
  //   }
}
