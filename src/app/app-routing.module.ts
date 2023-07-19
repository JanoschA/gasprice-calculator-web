import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyPolicyComponent} from "./privacy-policy/privacy-policy.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {GpcComponent} from "./gpc/gpc.component";
import {UserComponent} from "./gpc/user/user.component";
import {OverviewComponent} from "./gpc/overview/overview.component";

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'gpc', component: GpcComponent },
  { path: 'gpc/user', component: UserComponent },
  { path: 'gpc/overview', component: OverviewComponent },
  { path: 'oauth2/redirect', component: GpcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
