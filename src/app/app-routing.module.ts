import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

const routes: Routes = [
  { path:"loginsignup",component:LoginSignupComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardGuard]},
  { path: '', redirectTo: 'loginsignup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
