import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NoAutorizadoGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.IsLoggedIn()) {
      // Si el usuario ya está logueado, redirigir a la página principal
      this.router.navigate(['/inicio']);
      return false;
    }
    return true; // Permitir el acceso si no está autenticado
  }
}