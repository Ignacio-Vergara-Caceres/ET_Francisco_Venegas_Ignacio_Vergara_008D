import { Component, OnInit } from '@angular/core';
import { Icomentario } from 'src/interfaces/comen';
import { Router } from '@angular/router';
import { ComentariosService } from '../services/comentarios.service';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  newComentario: Icomentario={
    comentario: "",
    idEvento: 0,
    nombreEvento: "",
    nombreUsuario: ''
  }

  constructor(private router: Router,
            private comentarios: ComentariosService,
            private menucontroller: MenuController,
            private route: ActivatedRoute,
            private toast: ToastController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['idEvento']) {
        this.newComentario.idEvento = params['idEvento']; 
      }
      if (params['nombreEvento']) {
        this.newComentario.nombreEvento = params['nombreEvento'];
      }
      const nombreUsuario = sessionStorage.getItem('username');
      if (nombreUsuario) {
        this.newComentario.nombreUsuario = nombreUsuario;
      }
    });
  }

  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  dejarComentario(){
    // Verifica que el comentario no esté vacío
    if (this.newComentario.comentario.trim() === '') {
      this.showToast('El comentario no puede estar vacío.');
      return; //Salimos de la función
    }
    this.comentarios.postComentario(this.newComentario).subscribe();
    this.newComentario.comentario = '';
    this.router.navigateByUrl("/comentarios-dejados")
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

}
