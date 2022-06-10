import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import {Router} from '@angular/router';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private _http:SidebarService,private router: Router, public chd: ChangeDetectorRef) {

   }

  parents:any;
  child:any;

  menu:any;
  pantalla:any;
  template={
    id:''
  }

  accesos:any;

  dataSource:any;
	reclamos: any;
	administracion: any;
	bcra: any; 
  configura_mail: any; 
  configuracion: any; 
  encuesta: any; 
  reportes: any; 
  seguridad: any; 

  

  ngOnInit(): void {
    this.getAccesos();
  }

  getAccesos(){


    this._http.getAccesos("julian.speci").subscribe(result => {
				this.dataSource = result;
				this.reclamos =  this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == ' RECLAMOS');
				this.administracion = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'ADMINISTRACION');
				this.bcra = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'BCRA');
        this.configura_mail = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'CONFIGURA MAIL');
        this.configuracion = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'CONFIGURACION');
        this.encuesta = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'ENCUESTA');
        this.reportes = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'REPORTES');
        this.seguridad = this.dataSource.filter((data: { ac_modulo: string; }) => data.ac_modulo == 'SEGURIDAD');
			});


  }

  cerrarSesion()
  {
    this.router.navigateByUrl('/login'); 
  }

 

}