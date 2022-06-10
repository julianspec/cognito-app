import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PendientesComponent } from './pages/pendientes/pendientes.component';
import { APP_BASE_HREF } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ModalComponent } from './components/modal/modal.component';
import {HttpClientModule} from '@angular/common/http';
import { IframeComponent } from './components/iframe/iframe.component';
import { DinamichtmlComponent } from './components/dinamichtml/dinamichtml.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinamicComponent } from './pages/dinamic/dinamic.component';
import { DinamicFormComponent } from './pages/dinamic-form/dinamic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PendientesComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    ModalComponent,
    IframeComponent,
    DinamichtmlComponent,
    HomeComponent,
    RootComponent,
    DinamicComponent,
    DinamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
