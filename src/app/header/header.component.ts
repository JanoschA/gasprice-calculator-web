import { Component } from '@angular/core';
import {User} from "../gpc/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public getUser(): User {
    return JSON.parse(localStorage.getItem("user"));
  }

}
