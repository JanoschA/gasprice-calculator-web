import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './gpc/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {
    this.loadUser();
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  private loadUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  // Call this method whenever the user data changes (e.g., after login)
  updateUser() {
    this.loadUser();
  }
}
