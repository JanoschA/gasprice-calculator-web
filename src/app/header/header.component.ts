import { Component } from '@angular/core';
import {User} from "../gpc/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public user : User | null

  constructor() {
    let user = localStorage.getItem("user");
    if (user != null) {
      this.user = JSON.parse(user as string);
    } else {
      this.user = null;
    }
  }


  public getUser(): User {
    return JSON.parse(localStorage.getItem("user") as string);
  }

}
