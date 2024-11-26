import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ieventos } from 'src/interfaces/eventos';
import { environment } from 'src/environments/environment';
import { Iasistencia, Iasistencias } from 'src/interfaces/Iasistencias';

@Injectable({
  providedIn: 'root'
})
export class ApieventosService {

  constructor(private httpclient: HttpClient) {}

  getEventos(): Observable<Ieventos[]>{
    return this.httpclient.get<Ieventos[]>(`${environment.apiUrl}/eventos`);
  }

  getAsistencias():Observable<Iasistencia[]>{
    return this.httpclient.get<Iasistencia[]>(`${environment.apiUrl}/asistencias`);
  }

  postAsistencias(newAsistencia:any):Observable<Iasistencia>{
    return this.httpclient.post<Iasistencia>(`${environment.apiUrl}/asistencias/`, newAsistencia)
  }

  deleteAsistencias(asistencias:any):Observable<Iasistencias>{
    return this.httpclient.delete<Iasistencias>(`${environment.apiUrl}/asistencias/${asistencias.id}`)
  }
}
