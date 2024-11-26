import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApieventosService } from '../services/apieventos.service';
import { AuthService } from '../services/auth.service';
import { Iasistencia } from 'src/interfaces/Iasistencias';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  evento: any;
  userData: any;
  asistencia: any;

  Nasistencia: Iasistencia = {
    rut: 0,
    id_evento: 0,
    nombre: "",
    fecha: "",
    lugar: "",
    email: ""
  };

  nombre_usuario = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertController,
    private apievento: ApieventosService,
    private auth: AuthService,
    private menucontroller: MenuController
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['eventos']) {
        try {
          // Verifica si el parámetro "eventos" es válido y asigna el evento correctamente
          this.evento = JSON.parse(params['eventos']);
          this.nombre_usuario = sessionStorage.getItem('username') || 'Username';

          // Asignamos los valores del evento a Nasistencia
          this.Nasistencia.id_evento = this.evento.id;
          this.Nasistencia.nombre = this.evento.nombre;
          this.Nasistencia.lugar = this.evento.lugar;
          this.Nasistencia.fecha = this.evento.fecha;

          console.log('Evento cargado correctamente:', this.evento);
        } catch (error) {
          console.error('Error al parsear el parámetro "eventos":', error);
        }
      } else {
        console.error('No se encontró el parámetro "eventos" en la URL.');
      }
    });
  }

  ngOnInit() {
    console.log('Evento actual:', this.evento);
    this.obtenerUserData();
  }

  obtenerUserData() {
    this.auth.getByUsername(this.nombre_usuario).subscribe(resp => {
      this.userData = resp;
      this.Nasistencia.rut = this.userData[0].rut;
      this.Nasistencia.email = this.userData[0].email;
    });
  }

  registrarAsistencia() {
    this.apievento.getAsistencias().subscribe(asistencias => {
      const asistenciaExistente = asistencias.find(asistencia =>
        asistencia.rut === this.Nasistencia.rut && asistencia.id_evento === this.Nasistencia.id_evento
      );

      if (asistenciaExistente) {
        this.mensajeYaRegistrado();
      } else {
        this.apievento.postAsistencias(this.Nasistencia).subscribe(() => {
          this.mensajeExito();
        }, error => {
          console.error('Error al registrar la asistencia:', error);
          this.mensajeError();
        });
      }
    }, error => {
      console.error('Error al obtener las asistencias:', error);
      this.mensajeError();
    });
  }

  mostrarMenu() {
    this.menucontroller.open('first');
  }

  enviarDatos() {
    this.router.navigate(['/qr'], {
      queryParams: { asistencia: JSON.stringify(this.Nasistencia) }
    });
  }

  async mensajeConfirmar() {
    const alert = await this.alert.create({
      header: 'Ingresando asistencia a: ',
      subHeader: this.evento.nombre,
      mode: 'ios',
      buttons: [
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.registrarAsistencia();
          },
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/actividades']);
          }
        }],
    });

    await alert.present();
  }

  async mensajeExito() {
    const alert = await this.alert.create({
      header: 'Su asistencia ha sido ingresada correctamente a: ',
      subHeader: this.evento.nombre,
      mode: 'ios',
      buttons: [{
        text: 'Continuar',
        role: 'confirm',
        handler: () => {
          this.enviarDatos();
        },
      }],
    });

    await alert.present();
  }

  async mensajeYaRegistrado() {
    const alert = await this.alert.create({
      header: 'Asistencia ya registrada',
      subHeader: `Usted ya se encuentra registrado en el evento: ${this.evento.nombre}`,
      mode: 'ios',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async mensajeError() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Ocurrió un problema al intentar registrar su asistencia. Inténtelo nuevamente.',
      mode: 'ios',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
