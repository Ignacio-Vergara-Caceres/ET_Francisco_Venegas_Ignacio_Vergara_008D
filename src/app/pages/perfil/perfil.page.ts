import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UsersG } from 'src/interfaces/users';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre:string="";
  email:string="";
  userData: any;

  modificarForm: FormGroup;

  usuario: UsersG={
    id:0,
    rut:0,
    username:"",
    password:"",
    email:"",
    isactive: false
  }

  constructor(private menucontroller:MenuController, 
              private httpclient: HttpClient, 
              private router: Router, 
              private auth:AuthService,
              private alertcontroller: AlertController,
              private fBuilder: FormBuilder) {
                this.modificarForm = this.fBuilder.group({
                  'username': new FormControl ("", [Validators.minLength(6)]), //Opcional
                  'email': new FormControl ("", [Validators.email]), //Opcional
                  'password': new FormControl ("", [Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]), //Opcional
                  'imagenPerfil': new FormControl("")  //Opcional
                })
              }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('username') || 'Usuario';
    this.obtenerData();
    console.log('Usuario leido: ',this.usuario)
    
  }

  EditarPerfil(){
    if (this.modificarForm.valid){
      this.auth.getuserbyusername(this.modificarForm.value.username).subscribe(resp=>{
        this.userData = resp; 
          this.usuario.username = this.modificarForm.value.username || this.usuario.username; //Se actualiza solo cuando no está vacio
          this.usuario.password = this.modificarForm.value.password || this.usuario.password; //Se actualiza solo cuando no está vacio
          this.usuario.email = this.modificarForm.value.email || this.usuario.email; //Se actualiza solo cuando no está vacio
          this.auth.putusuario(this.usuario).subscribe();
          sessionStorage.setItem('username', this.usuario.username); //Actualiza el sessionStorage para mantener la sesión iniciada al editar el usuario
          this.modificarForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
      })
    }
  }
  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Perfil de usuario',
      message: 'Bienvenid@! ' + this.usuario.username,
      buttons: ['OK']
    });
    alerta.present();
  }

  obtenerData(){
    this.auth.getuserbyusername(this.nombre).subscribe(resp =>{
      this.userData = resp
      this.usuario.id = this.userData[0].id
      this.usuario.username = this.userData[0].username;
      this.usuario.rut = this.userData[0].rut;
      this.usuario.password = this.userData[0].password;
      this.usuario.email = this.userData[0].email;
      this.usuario.isactive = this.userData[0].isactive;
      console.log('usuario: ', this.usuario.username)
      console.log('id: ', this.usuario.id)
    
    });
  }
  
  mostrarMenu(){
    this.menucontroller.open('first');
  }
}