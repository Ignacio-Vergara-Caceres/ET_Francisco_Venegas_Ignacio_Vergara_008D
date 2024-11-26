import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle'; //Para Swiper

interface Opciones{
  icon: string;
  name: string;
  redirecTo: string;
}

register(); //Para Swiper

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  opciones : Opciones[]=[
    {
      icon:'information-outline',
      name:'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon:'calendar-clear-outline',
      name:'Registro a actividades',
      redirecTo: '/actividades'
    },
    {
      icon:'create-outline',
      name: 'Mis asistencias',
      redirecTo: '/mis-asistencias'
    },
    {
      icon:'accessibility-outline',
      name:'Comentarios y opiniones',
      redirecTo: '/comentarios-dejados'
    },
    {
      icon:'person-outline',
      name:'Perfil',
      redirecTo: '/perfil'
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
    this.router.navigate(['/bienvenida']);
  }

}
