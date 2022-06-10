import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamichtmlComponent } from './components/dinamichtml/dinamichtml.component';
import { HomeComponent } from './components/home/home.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { LoginComponent } from './components/login/login.component';
import { PendientesComponent } from './pages/pendientes/pendientes.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DinamicComponent } from './pages/dinamic/dinamic.component';
import { DinamicFormComponent } from './pages/dinamic-form/dinamic-form.component';


const routes: Routes = [   
  { path: '',redirectTo:'/main', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  {
		path: 'main',
    component: MainPageComponent,
		children: [
      { path: '', component: HomeComponent},
      { path: 'bandeja', component: PendientesComponent },
      { path: 'dinamicpage/:opcion', component: DinamicComponent },   
      { path: 'dinamicpageform', component: DinamicFormComponent }, 
      { path: 'iframe/:url', component: IframeComponent },
      { path: 'dinamic/:html', component: DinamichtmlComponent },
		]
	}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
