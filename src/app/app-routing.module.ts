import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './AuthGuard/auth-guard.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DisplaybookComponent } from './component/displaybook/displaybook.component';
import { DisplayselectedbookComponent } from './component/displayselectedbook/displayselectedbook.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path:"loginsignup",component:LoginSignupComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  { path: "home", component: DashboardComponent, canActivate: [AuthGuardGuard],
  children:[
    { path:"books",component: DisplaybookComponent},
    { path:"wishlist",component:WishlistComponent },
    { path:"book",component:DisplayselectedbookComponent },
    { path:"mycart",component:MycartComponent }
  ]
  },
  { path: '', redirectTo: 'loginsignup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
