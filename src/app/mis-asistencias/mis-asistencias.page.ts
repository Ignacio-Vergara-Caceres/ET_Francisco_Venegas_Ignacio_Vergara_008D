import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Iasistencia } from 'src/interfaces/Iasistencias';
import { ApieventosService } from '../services/apieventos.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {

  asistencias: Iasistencia[]=[];
  sesion_rut:number = 0;
  usuario= sessionStorage.getItem('username') || 'Username';
  userdata:any;

  constructor(private router: Router,
              private apievento: ApieventosService,
              private menu: MenuController,
              private auth: AuthService) { }

  ngOnInit() {
    this.apievento.getAsistencias().subscribe(data =>{
      this.asistencias = data;
      console.log(this.asistencias);
    })
    this.obtenerEvento();
    console.log(this.usuario);
  }

  mostrarMenu(){
    this.menu.open('first');
  }

  obtenerEvento(){
    this.auth.getByUsername(this.usuario).subscribe(resp =>{
      this.userdata = resp;
      this.sesion_rut = this.userdata[0].rut;
      console.log(this.sesion_rut);
    })
  }

  borrarAsistencia(asistencia:any){
    this.apievento.deleteAsistencias(asistencia).subscribe();
    this.router.navigateByUrl("actividades");
  }

  mostrarQR(asistencia: any) {
    this.router.navigate(['/qr'], {
      queryParams: { asistencia: JSON.stringify(asistencia) }
    });
  }

}
