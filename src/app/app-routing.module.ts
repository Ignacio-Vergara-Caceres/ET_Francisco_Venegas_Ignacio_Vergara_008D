import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadosGuard } from './guards/autorizados.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'crear-evento',
    loadChildren: () => import('./pages/crear-evento/crear-evento.module').then( m => m.CrearEventoPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'modificar-evento',
    loadChildren: () => import('./pages/modificar-evento/modificar-evento.module').then( m => m.ModificarEventoPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'asistentes',
    loadChildren: () => import('./pages/asistentes/asistentes.module').then( m => m.AsistentesPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./pages/leer-qr/leer-qr.module').then( m => m.LeerQrPageModule),
    canActivate: [AutorizadosGuard]
  },
  {
    path: 'ver-qr',
    loadChildren: () => import('./pages/ver-qr/ver-qr.module').then( m => m.VerQrPageModule),
    canActivate: [AutorizadosGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
