import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icomentario } from 'src/interfaces/comen';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpclient: HttpClient) { }

  getComentario(): Observable<Icomentario[]>{
    return this.httpclient.get<Icomentario[]>(`${environment.apiUrl}/comentarios`)
  }

  postComentario(newComentario: Icomentario): Observable<Icomentario>{
    return this.httpclient.post<Icomentario>(`${environment.apiUrl}/comentarios`, newComentario)
  }
}
