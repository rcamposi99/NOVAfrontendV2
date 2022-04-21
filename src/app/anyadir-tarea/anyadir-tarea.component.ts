import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-anyadir-tarea',
  templateUrl: './anyadir-tarea.component.html',
  styleUrls: ['./anyadir-tarea.component.scss']
})

export class AnyadirTareaComponent implements OnInit {

  tarea1:Tarea = {};

  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
  }

  /*Añadimos una tarea*/
  public tareaCreada():void{
    this.gestorHTTP.postTarea(this.tarea1).subscribe();
  }

}
