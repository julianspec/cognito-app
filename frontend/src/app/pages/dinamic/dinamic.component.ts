import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DinamicService } from 'src/app/services/dinamic.service';


@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styleUrls: ['./dinamic.component.css','./customCss.css']
})
export class DinamicComponent implements OnInit {

  opcion:any;
  datasource:any;
  gridHeader:any;
  gridHeaderJSON:any;
  dataCount:any;
  gridBody:any;
  table:any;
  @ViewChild('grdDatos') tabla: any;

  constructor(private _route: ActivatedRoute,public sanitizer: DomSanitizer,private servicio : DinamicService) { 
    this.renderHtml();
  }

  ngOnInit(): void {
    this.renderHtml();
  }

  renderHtml(){
    this._route.paramMap.subscribe(param => {
      this.opcion = param.get('opcion');
      this.getHeaders(this.opcion );
    });
  }

  getHeaders(opt: any){
    this.servicio.getGridHeader(opt).subscribe((resultado: any) => {
     this.datasource = resultado
     this.dataCount = this.datasource.count;
     this.gridHeader = this.datasource.gridheader;
     this.gridHeaderJSON = this.datasource.gridheaderjson;
     this.gridBody = this.datasource.htmlbody; 
     this.table = this.datasource.table;
     localStorage.setItem('opcion', this.opcion);
     localStorage.setItem('tabla', this.table);
    });
    //Esto es para el goback

    
  }

  showEmptyForm(){
    localStorage.setItem('modo', 'alta');
    window.location.href = "main/dinamicpageform";
  }

  

}