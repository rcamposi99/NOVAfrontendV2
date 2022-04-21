import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-anyadir-tarea',
  templateUrl: './anyadir-tarea.component.html',
  styleUrls: ['./anyadir-tarea.component.scss']
})

export class AnyadirTareaComponent implements OnInit {

  tarea1:Tarea = {};

  @Output() emitidorEventos= new EventEmitter<string>(); //Sirve para emitir informacion a la clase padre, en este caso app.component.ts

  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
  }

  /*Añadimos una tarea*/
  public tareaCreada():void{
    this.gestorHTTP.postTarea(this.tarea1).subscribe();
    this.emitidorEventos?.emit("Has añadido la tarea: " + this.tarea1?.id)
  }

}
