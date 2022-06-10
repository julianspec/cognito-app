import { Component, OnInit } from '@angular/core';
import { PendientesService } from 'src/app/services/pendientes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css','./customCss.css'] 
})


export class PendientesComponent implements OnInit {

  constructor(private servicio : PendientesService) { 

  }

  data:any;


  ngOnInit(): void {
    this.getPendientes();
  }

  getPendientes(){
    this.servicio.getPendientes().subscribe(resultado => this.data = resultado);
  }


}
