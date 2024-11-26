import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComentariosService } from '../services/comentarios.service';
import { Icomentario } from 'src/interfaces/comen';


@Component({
  selector: 'app-comentarios-dejados',
  templateUrl: './comentarios-dejados.page.html',
  styleUrls: ['./comentarios-dejados.page.scss'],
})
export class ComentariosDejadosPage implements OnInit {

  comentario:Icomentario[]=[];

  constructor(private comentarios:ComentariosService,
              private menucontroller: MenuController) { }

  ngOnInit() {
    this.comentarios.getComentario().subscribe((data)=>{
      this.comentario = data;
    })
  }
  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
