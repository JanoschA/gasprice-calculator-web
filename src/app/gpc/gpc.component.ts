import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {User} from "./User";
import {environment} from "../../environment";

@Component({
  selector: 'app-gpc',
  templateUrl: './gpc.component.html',
  styleUrls: ['./gpc.component.scss']
})
export class GpcComponent {

  error: string | null = "";
  public defaultValue: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    console.log(this.route.queryParamMap);

    this.route.queryParamMap.subscribe((params) => {
      this.error = params.get('error');

      if ("false" == this.error) {
        //this.router.navigate(['/'], { relativeTo: this.route }).then(() => {}) // <-- this works
      } else {
        // TODO
      }
    });

    this.http
      .get<User>(environment.serverHost + "/profile", {withCredentials: true, responseType: 'json', observe: 'body'})
      .subscribe((data: User) => this.defaultValue = data.email);
  }


}
