import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DinamicService } from 'src/app/services/dinamic.service';
import Swal from 'sweetalert2';

import { capturarDatos} from './controller/form.controller';


@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.css','./customCss.css']
})

export class DinamicFormComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer,private servicio : DinamicService) { 
    this.capturarDatos();
  }

  ngOnInit(): void {}

   datasource: any;
   titulo : any;
   tabla  : any;
   modo   : any;
   dato1  : any;
   dato2  : any;
   dato3  : any;
   dato4  : any; 
   dato5  : any;
   dato6  : any;
   dato7  : any;
   dato8  : any;
   dato9  : any;
   dato10 : any;
   opcion : any;
   saveBtn : any;
   delBtn : any;
   formParams :any;

  capturarDatos(){

    this.opcion   = localStorage.getItem('opcion');
    this.modo     = localStorage.getItem('modo');
    this.tabla    = localStorage.getItem('tabla');

     if(this.modo == "edit"){  
        this.titulo = "Patalla de edición ";
        this.dato1  = localStorage.getItem('dato1');
        this.dato2  = localStorage.getItem('dato2');
        this.dato3  = localStorage.getItem('dato3');
        this.dato4  = localStorage.getItem('dato4');
        this.dato5  = localStorage.getItem('dato5');
        this.dato6  = localStorage.getItem('dato6');
        this.dato7  = localStorage.getItem('dato7');
        this.dato8  = localStorage.getItem('dato8');
        this.dato9  = localStorage.getItem('dato9');
        this.dato10 = localStorage.getItem('dato10');
        this.getDinamicForm(this.tabla,this.modo,
        this.dato1,this.dato2,this.dato3,this.dato4,
        this.dato5,this.dato6,this.dato7,this.dato8,this.dato9,this.dato10);
     }else{
      this.titulo = "Patalla de alta";
      this.saveBtn = true;
      this.delBtn = false;
      this.dato1  = "";
      this.dato2  = "";
      this.dato3  = "";
      this.dato4  = "";
      this.dato5  = "";
      this.dato6  = "";
      this.dato7  = "";
      this.dato8  = "";
      this.dato9  = "";
      this.dato10 = "";
      this.getDinamicForm(this.tabla,"alta","0","0","0","0","0","0","0","0","0","0");
      this.saveBtn = true;
      this.delBtn = false;
     }
  }

  getDinamicForm(tabla:any,modo:any,id1:any,id2:any,id3:any,id4:any,id5:any,id6:any,id7:any,id8:any,id9:any,id10:any){

    this.servicio.getDinamicForm(tabla,modo,id1,id2,id3,id4,id5,id6,id7,id8,id9,id10).subscribe((resultado: any) => {
      this.datasource = resultado.html;
     });
   
    if(localStorage.getItem('saveBtn') == 'S'){
      this.saveBtn = true;
    }else{
      this.saveBtn = false;
    }

    if(localStorage.getItem('delBtn') == 'S'){
      this.delBtn = true;
    }else{
      this.delBtn = false;
    }
   
  }

  goBack(){
    window.location.href = "main/dinamicpage/" +  this.opcion;
  }

  save(){
        capturarDatos();
        this.formParams = localStorage.getItem('formParams');
        this.servicio.saveFormParams(this.formParams,this.modo ).subscribe((resultado: any) => {
          this.goBack();
        });
  }

  delete(){

     
    Swal.fire({
      icon:'error',
      title: 'Cuidado',
      text:'Eliminar registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText:'Cancelar',
      customClass: {
        actions: 'my-actions',
        cancelButton:  'btn-secondary order-2',
        confirmButton: 'btn-danger order-1'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        capturarDatos();
        this.formParams = localStorage.getItem('formParams');
        this.servicio.saveFormParams(this.formParams,'delete').subscribe((resultado: any) => {
          this.goBack();
        });
      } 
    });

  }

}