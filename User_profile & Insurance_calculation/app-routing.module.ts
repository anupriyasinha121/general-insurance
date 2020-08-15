import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculateInsuranceComponent } from './calculate-insurance/calculate-insurance.component';
import {UserProfileComponent} from './user-profile/user-profile.component';


const routes: Routes = [{path: 'calculate-insurance', component: CalculateInsuranceComponent},
{path: 'user-profile', component: UserProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
