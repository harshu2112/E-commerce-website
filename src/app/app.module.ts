import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MinihomeComponent } from './minihome/minihome.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';
import { Viewproduct1Component } from './viewproduct1/viewproduct1.component';
import { Viewproduct2Component } from './viewproduct2/viewproduct2.component';
import { Viewproduct3Component } from './viewproduct3/viewproduct3.component';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { Viewproduct4Component } from './viewproduct4/viewproduct4.component';
import { ShippingaddressComponent } from './shippingaddress/shippingaddress.component';
import { HenryhomeComponent } from './henryhome/henryhome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MinihomeComponent,
    MenComponent,
    WomenComponent,
    HandbagsComponent,
    CartComponent,
    KidsComponent,
    ProfileComponent,
    Viewproduct1Component,
    Viewproduct2Component,
    Viewproduct3Component,
    Page404notfoundComponent,
    Viewproduct4Component,
    ShippingaddressComponent,
    HenryhomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
