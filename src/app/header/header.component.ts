import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../gpc/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user$: Observable<User | null>;

  constructor() {}

  ngOnInit() {
    this.user$ = this.getUser();
  }

  public getUser(): Observable<User | null> {
    let user = localStorage.getItem("user");
    if (user != null) {
      return of(JSON.parse(user));
    } else {
      return of(null);
    }
  }
}
