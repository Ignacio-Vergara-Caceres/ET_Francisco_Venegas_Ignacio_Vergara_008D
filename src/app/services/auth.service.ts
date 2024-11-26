import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersG, UserNuevoGestor } from 'src/interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  getallusers():Observable<UsersG[]>{
    return this.httpclient.get<UsersG[]>(`${environment.apiURL}/usuarios_gestores`);
  }

  getuserbyusername(usuario:any):Observable<UsersG>{
    return this.httpclient.get<UsersG>(`${environment.apiURL}/usuarios_gestores/?username=${usuario}`);
  }

  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }

  postusuario(newusuario:UserNuevoGestor): Observable<UserNuevoGestor>{
    return this.httpclient.post<UsersG>(`${environment.apiURL}/usuarios_gestores`, newusuario);
  }

  putusuario(Users:any):Observable<UsersG>{
    return this.httpclient.put<UsersG>(`${environment.apiURL}/usuarios_gestores/${Users.id}`, Users);
  }
}

