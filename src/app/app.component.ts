import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  opciones : Opciones[]=[
    {
      icon:'play-outline',
      name:'Inicio',
      redirecTo: '/home'
    },
    {
      icon:'create-outline',
      name:'Evento nuevo',
      redirecTo: '/crear-evento'
    },
    {
      icon:'browsers-outline',
      name:'Eventos',
      redirecTo: '/eventos'
    },
    {
      icon:'person-outline',
      name:'Perfil',
      redirecTo: '/perfil'
    },
    {
      icon:'id-card-outline',
      name:'Asistencias',
      redirecTo: '/asistentes'
    },
    {
      icon:'camera-outline',
      name:'Leer QR',
      redirecTo: '/leer-qr'
    },
    {
      icon:'log-out-outline',
      name:'Cerrar sesión',
      redirecTo: '/'
    }
    
  ]

  constructor(private router: Router) {}

  manejadorMenu(opcion: Opciones) { //Si se selecciona la opción "Cerrar sesión", se ejecuta la función cerrarSesion()
    if (opcion.name === 'Cerrar sesión') {
      this.cerrarSesion();
    } else {
      this.router.navigate([opcion.redirecTo]);
    }
  }
  
  cerrarSesion() {
    sessionStorage.clear(); // Elimina los datos de sessionStorage

    // Redirige al usuario a la página de inicio o de login
    this.router.navigate(['/inicio']);
  }
  
}
