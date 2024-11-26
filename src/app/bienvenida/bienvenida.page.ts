import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  constructor(private menucontroller: MenuController, 
    private alertcontroller: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  // Método para ir a login
  redirigir_login() {
    this.router.navigate(['/login']);
  }
  // Método para ir a register
  redirigir_register() {
    this.router.navigate(['/register']);
  }
}
