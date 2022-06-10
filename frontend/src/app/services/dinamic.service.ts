import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DinamicService {

  constructor(private _http: HttpClient) { }
  
  getGridHeader(opt:any) {
    return this._http.get(environment.host + 'dinamic/gethtml?opcion=' + opt);
  }

  getDinamicForm(tabla:any, modo:any, id1:any, id2:any, id3:any, id4:any, id5:any, id6:any, id7:any, id8:any, id9:any, id10:any) {
    return this._http.get(environment.host + "dinamic/gethtmlform?tabla=" + tabla + "&modo=" + modo 
    + "&id1=" + id1 + "&id2=" + id2 + "&id3=" + id3 + "&id4=" + id4 + "&id5=" + id5
    + "&id6=" + id6 + "&id7=" + id7 + "&id8=" + id8 + "&id9=" + id9 + "&id10=" + id10);
	}

  saveFormParams(params:any, modo:any){
    return this._http.get(environment.host + "dinamic/saveParams?formParams=" + params + "&modo=" + modo);
  }

}