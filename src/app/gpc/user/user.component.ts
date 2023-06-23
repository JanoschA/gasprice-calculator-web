import { Component } from '@angular/core';
import {User} from "../User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public user: User

  constructor() {
    this.user = JSON.parse(localStorage.getItem("user") as string);
  }
}
