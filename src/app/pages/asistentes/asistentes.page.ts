import { Component, OnInit } from '@angular/core';
import { ApiasistenciasService } from 'src/app/services/apiasistencias.service';
import { Iasistentes } from 'src/interfaces/asistentes';

@Component({
  selector: 'app-asistentes',
  templateUrl: './asistentes.page.html',
  styleUrls: ['./asistentes.page.scss'],
})
export class AsistentesPage implements OnInit {
  asistentes: Iasistentes[] = [];
  filtroEventoId: string = ''; // Almacena el ID del evento para el filtro

  constructor(private apicrud: ApiasistenciasService) {}

  ngOnInit() {
    this.apicrud.getAsistentes().subscribe((data) => {
      this.asistentes = data;
    });
  }

  // Método para devolver asistentes filtrados
  asistentesFiltrados(): Iasistentes[] {
    if (!this.filtroEventoId) {
      return this.asistentes; // Sin filtro, devuelve todos
    }
    return this.asistentes.filter((asistente) =>
      asistente.id_evento.toString().includes(this.filtroEventoId)
    );
  }
}