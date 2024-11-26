import { Component, OnInit } from '@angular/core';
import { ApieventoService } from 'src/app/services/apievento.service';
import { Ieventos } from 'src/interfaces/apievento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  eventos:Ieventos[]=[];

  constructor(private apieventos: ApieventoService,
              private router: Router) { }

  ngOnInit() {
    this.apieventos.geteventos().subscribe((data)=>{
      this.eventos = data;
    })
  }

  borrarEvento(eventos:any){
    this.apieventos.deleteEvento(eventos).subscribe();
    this.router.navigateByUrl("eventos");
  }

  modificarEvento(eventos:Ieventos){
    this.router.navigate(['/modificar-evento'],{
    queryParams:{eventos: JSON.stringify(eventos)}});
  }

}
