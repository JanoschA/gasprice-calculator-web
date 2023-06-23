import { Component } from '@angular/core';
import {environment} from "../../environment";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  protected readonly environment = environment;
}
