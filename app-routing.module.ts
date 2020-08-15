import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component'
import { RegisterComponent} from './register/register.component'

const routes: Routes = [
  {path:'forgotPassword',component:ForgotPasswordComponent},{path:'resetPassword',component:ResetPasswordComponent},{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ForgotPasswordComponent,ResetPasswordComponent,LoginComponent,RegisterComponent]