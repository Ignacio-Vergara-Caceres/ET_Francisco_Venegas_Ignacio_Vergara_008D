import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApieventosService } from '../services/apieventos.service';
import { Ieventos } from 'src/interfaces/eventos';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  eventos:Ieventos[]=[];

  constructor(private router: Router,
              private menucontroller: MenuController,
              private apieventos: ApieventosService) { }

  ngOnInit() {
    this.apieventos.getEventos().subscribe((data)=>{
      this.eventos = data;
    })
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  comentario(evento: Ieventos) {
    this.router.navigate(['/comentarios'], {
      queryParams: {
        idEvento: evento.id,
        nombreEvento: evento.nombre
      }
    });
  }

  asistir(eventos:any){
    console.log(eventos);
    this.router.navigate(['/registro-asistencia'],{queryParams:{eventos:JSON.stringify(eventos)}});
  }
}
