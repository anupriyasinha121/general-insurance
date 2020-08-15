import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from "./about-us/about-us.component";
import { FAQComponent } from "./faq/faq.component";
import { ContactUsComponent} from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [  {path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'contact-us', component: ContactUsComponent},
{path: 'about-us', component: AboutUsComponent},
{path: 'faq', component: FAQComponent,},
{path: 'nav-bar', component: NavBarComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }