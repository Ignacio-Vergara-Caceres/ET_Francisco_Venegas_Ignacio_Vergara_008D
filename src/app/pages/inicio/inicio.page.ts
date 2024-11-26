import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menucontroller: MenuController, 
              private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }

 async mensajeIni(){
    const alert = await this.alertcontroller.create({
      header: 'Redirigiendo al inicio de sesion',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('El usuario ha cancelado la acción');
            
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El usuario ha confirmado la acción');
            this.router.navigate(['/alert']);
          },
        },
      ],
    });

    await alert.present();

   
  }

  async mensajeReg(){
    const alert = await this.alertcontroller.create({
      header: 'Redirigiendo al registro de usuario',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('El usuario ha cancelado la acción');
            
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('El usuario ha confirmado la acción');
            this.router.navigate(['/card']);
          },
        },
      ],
    });

    await alert.present();

   
  }

 }

