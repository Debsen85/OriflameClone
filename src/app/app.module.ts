import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ServicesComponent,
    ContactUsComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //HomeComponent,
    //AboutUsComponent,
    //ProductsComponent,
    //ServicesComponent,
    //ContactUsComponent,
    //SignInComponent,
    //SignUpComponent
  ]
})
export class AppModule { }
