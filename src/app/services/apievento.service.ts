import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ievento, Ieventos } from 'src/interfaces/apievento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApieventoService {

  constructor(private httpclient: HttpClient) { }

  geteventos(): Observable<Ieventos[]>{
    return this.httpclient.get<Ieventos[]>(`${environment.apiURL}/eventos`)
  }

  postevento(newevento:any): Observable<Ievento>{
    return this.httpclient.post<Ievento>(`${environment.apiURL}/eventos`, newevento)
  }

  getByEventoName(evento:any):Observable<Ievento>{
    return this.httpclient.get<Ievento>(`${environment.apiURL}/eventos/?nombre=${evento}`);
  }

  deleteEvento(evento:any):Observable<Ieventos>{
    return this.httpclient.delete<Ieventos>(`${environment.apiURL}/eventos/${evento.id}`)
  }

  putEventos(evento:any):Observable<Ieventos>{
    return this.httpclient.put<Ieventos>(`${environment.apiURL}/eventos/${evento.id}`, evento)
  }
}
