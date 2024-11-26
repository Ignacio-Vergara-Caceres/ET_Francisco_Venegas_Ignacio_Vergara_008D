import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iasistentes } from 'src/interfaces/asistentes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiasistenciasService {

  constructor(private httpclient:HttpClient) { }

  getAsistentes():Observable<Iasistentes[]>{
    return this.httpclient.get<Iasistentes[]>(`${environment.apiURL}/asistencias`);
  }
}
