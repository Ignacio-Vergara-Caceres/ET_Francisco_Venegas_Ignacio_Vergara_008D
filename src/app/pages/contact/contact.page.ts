import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
 
  nom="";
  descripcion="";
  fecha="";
  hora="";
  ubicacion="";
  
  

  constructor(private alertcontroller: AlertController,
              private router: Router) { }

  ngOnInit() {
  }

  async mensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Evento ' +this.nom+ ' creado con exito',
      mode:'ios',
      cssClass:'alertHeader',
      buttons: [
       {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log(this.descripcion);
            this.router.navigate(['/eventos']);
          },
        },
      ],
    });

    await alert.present();
   
  }

}
