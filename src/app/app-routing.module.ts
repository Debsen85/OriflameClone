import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { 
    path: '', redirectTo: '/Home', pathMatch: 'full' 
  },
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'AboutUs', component: AboutUsComponent
  },
  {
    path: 'ContactUs', component: ContactUsComponent
  },
  {
    path: 'Services', component: ServicesComponent
  },
  {
    path: 'SignIn', component: SignInComponent
  },
  {
    path: 'SignUp', component: SignUpComponent
  },
  {
    path: 'Products', component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
