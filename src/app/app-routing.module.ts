import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

const routes: Routes = [
  { path:"login",component:LoginSignupComponent },
  { path:"dashboard",component:DashboardComponent },
  { path:"forgotpassword",component:ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
