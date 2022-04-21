import { Component} from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';


@Component({
  selector: 'app-dialogo-anyadir-tarea',
  templateUrl: './dialogo-anyadir-tarea.component.html',
  styleUrls: ['./dialogo-anyadir-tarea.component.scss']
})

export class DialogoAnyadirTareaComponent {

  tarea1:Tarea = {};

  constructor(public gestorHTTP: TareasServiceService){}

  /*Añadimos una tarea*/
  public tareaCreada():void{
    this.gestorHTTP.postTarea(this.tarea1).subscribe();
  }
}
