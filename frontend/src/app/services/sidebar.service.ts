import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  constructor(private _http: HttpClient) { }

  getAccesos(usuario:any){
    return this._http.get(environment.host + 'accesos/sp_accesos/' + usuario);
  }
  
 
}
