import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApieventosService } from '../services/apieventos.service';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})


export class QrPage implements OnInit {
  eventos:any;
  id:any;
  qrdata:string;
  nombre:any;
  rut:any;
  email:any;

  constructor(private router: Router,
              private apieventos: ApieventosService,
              private activated: ActivatedRoute,
              private menucontroller: MenuController) { 
                this.activated.queryParams.subscribe(param =>{
                  this.eventos =JSON.parse(param['asistencia'])
                })
                this.qrdata='';
                this.nombre = sessionStorage.getItem('username');
                this.rut = sessionStorage.getItem('rut');
                this.email = sessionStorage.getItem('email');
              }

  ngOnInit() {
    this.generarQR();
  }

  generarQR(){
    this.qrdata=`Nombre evento: ${this.eventos.nombre}
    Fecha evento: ${this.eventos.fecha}
    Nombre almuno: ${this.nombre}
    Rut alumno: ${this.rut}
    Correo alumno: ${this.email}`;
    
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
