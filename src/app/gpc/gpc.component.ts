import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {User} from "./User";
import {environment} from "../../environments/environment";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-gpc',
  templateUrl: './gpc.component.html',
  styleUrls: ['./gpc.component.scss']
})
export class GpcComponent {

  error: string | null = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService) {
    console.log(this.route.queryParamMap);

    this.route.queryParamMap.subscribe((params) => {
      this.error = params.get('error');

      if ("true" == this.error) {
        console.log("Error from OAuth Server")
      }
    });

    this.http
      .get<User>(environment.serverHost + "/profile", {withCredentials: true, responseType: 'json', observe: 'body'})
      .subscribe((data: User) => {
        localStorage.setItem("user", JSON.stringify(data));
        this.authService.updateUser();
      });

    this.router.navigate(['/gpc/overview']).then(() => console.log("successful redirect to gpc/overview"));
  }


}
