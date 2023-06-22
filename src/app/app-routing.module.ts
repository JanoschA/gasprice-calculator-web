import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {GpcComponent} from "./gpc/gpc.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '/sign-in', component: SignInComponent },
  { path: 'gpc', component: GpcComponent },
  { path: 'oauth2/redirect', component: GpcComponent },
  { path: '/oauth2/redirect', component: GpcComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
