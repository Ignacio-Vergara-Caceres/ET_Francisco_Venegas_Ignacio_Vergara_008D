import { Component, OnInit } from '@angular/core';
import { Ievento } from 'src/interfaces/apievento';
import { ApieventoService } from 'src/app/services/apievento.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  eventoForm: FormGroup;
  imagenEvento: string = ''; // String para almacenar la imagen seleccionada

  newevento: Ievento={
    nombre:"",
    fecha:"",
    lugar:"",
    descripcion:"",
    imagenEvento:""
  }

  eventodata: any;

  constructor(private apievento: ApieventoService, 
    private alertcontroller: AlertController,
    private router: Router,
    private fBuilder: FormBuilder) {
      this.eventoForm = this.fBuilder.group({ 
      'nombre' : new FormControl(""),
      'fecha': new FormControl(""),
      'lugar': new FormControl(""),
      'descripcion': new FormControl(""),
      'imagenEvento': new FormControl("")
    })
}


ngOnInit() {
}

async seleccionarImagen() {
  const imagen = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    source: CameraSource.Photos
  });

  this.imagenEvento = 'data:imagen/jpeg;base64,' + imagen.base64String;
}

crearevento(){
if (this.eventoForm.valid){
this.apievento.getByEventoName(this.eventoForm.value.nombre).subscribe(resp=>{
this.eventodata = resp; 
if(this.eventodata.length>0){
   this.eventoForm.reset();
  this.errorDuplicidad();
}
else{
  this.newevento.nombre = this.eventoForm.value.nombre;
  this.newevento.lugar = this.eventoForm.value.lugar;
  this.newevento.fecha = this.eventoForm.value.fecha;
  this.newevento.descripcion = this.eventoForm.value.descripcion;
  this.apievento.postevento(this.newevento).subscribe();
  this.eventoForm.reset();
  this.mostrarMensaje();
  this.router.navigateByUrl('/eventos');
}
})
}
}

async mostrarMensaje(){
const alerta = await this.alertcontroller.create({
header: 'Evento creado',
message: this.newevento.nombre,
buttons: ['OK']
});
alerta.present();
}

async errorDuplicidad(){
const alerta = await this.alertcontroller.create({
header: 'Error...',
message: this.newevento.nombre + ' ya está registrado',
buttons: ['OK']
});
alerta.present();
}

}
