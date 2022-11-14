import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MainLayoutComponent } from './layouts/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "./app-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MainInterceptor} from "./main.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    CarsComponent,
    CarComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
