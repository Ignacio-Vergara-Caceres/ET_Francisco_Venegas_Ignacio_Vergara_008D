import { Component} from '@angular/core';
import { Ieventos } from 'src/interfaces/apievento';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApieventoService } from 'src/app/services/apievento.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.page.html',
  styleUrls: ['./modificar-evento.page.scss'],
})
export class ModificarEventoPage{
  eventoData: any;

  modificarEventoForm: FormGroup;
  imagenEvento: string = '';
  evento:any;

  eventoMod: Ieventos={
    id:0,
    nombre:"",
    lugar:"",
    fecha:"",
    descripcion:"",
    imagenEvento:""
  }

  constructor(private menucontroller:MenuController, 
              private httpclient: HttpClient, 
              private router: Router, 
              private apievento:ApieventoService,
              private alertcontroller: AlertController,
              private fBuilder: FormBuilder,
              private activated: ActivatedRoute) {
                this.activated.queryParams.subscribe(param =>{
                  this.evento =JSON.parse(param['eventos']);
                })
                this.modificarEventoForm = this.fBuilder.group({
                  'nombre': new FormControl (""), //Opcional
                  'lugar': new FormControl (""), //Opcional
                  'fecha': new FormControl (""),
                  'descripcion': new FormControl(""), //Opcional
                  'imagenEvento': new FormControl("")  //Opcional
                })
              }
  ModificarEvento(){
    if (this.modificarEventoForm.valid){
      this.apievento.getByEventoName(this.modificarEventoForm.value.nombre).subscribe(resp=>{
        this.eventoData = resp; 
          this.evento.nombre = this.modificarEventoForm.value.nombre || this.evento.nombre;
          this.evento.lugar = this.modificarEventoForm.value.lugar || this.evento.lugar;
          this.evento.fecha = this.modificarEventoForm.value.fecha || this.evento.fecha;
          this.evento.descripcion = this.modificarEventoForm.value.descripcion || this.evento.descripcion;
          if (this.imagenEvento){ 
            this.evento.imagenEvento = this.imagenEvento;
          }
          this.apievento.putEventos(this.evento).subscribe();
          this.modificarEventoForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/eventos');
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Evento a modificar',
      message: 'Evento ' + this.evento.nombre + 'modificado',
      buttons: ['OK']
    });
    alerta.present();
  }

  obtenerData(){
    this.apievento.getByEventoName(this.evento.nombre).subscribe(resp =>{
      this.eventoData = resp
      this.evento.id = this.eventoData[0].id
      this.evento.nombre = this.eventoData[0].nombre;
      this.evento.lugar = this.eventoData[0].lugar;
      this.evento.fecha = this.eventoData[0].fecha;
      this.evento.descripcion = this.eventoData[0].descripcion;
      if(!this.imagenEvento){
        this.evento.imagenEvento = this.eventoData[0].imagenEvento;
        this.imagenEvento = this.evento.imagenEvento ?? '';
      }
      console.log('evento: ', this.evento.nombre)
      console.log('id: ', this.evento.id)
    
    });
  }
  
  mostrarMenu(){
    this.menucontroller.open('first');
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

}