import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PendientesService {

  constructor(private _http: HttpClient) { }

  getPendientes() {
    return this._http.get(environment.host + 'pendientes/sp_pendiente');
  }
  

}
