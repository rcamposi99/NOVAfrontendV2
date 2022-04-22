import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-dialogo-editar-tarea',
  templateUrl: './dialogo-editar-tarea.component.html',
  styleUrls: ['./dialogo-editar-tarea.component.scss']
})
export class DialogoEditarTareaComponent implements OnInit {

  tareaE:Tarea = {}; //Tarea que vamos a editar

  constructor(public gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
  }

  recibirTarea(tarea1:Tarea):void{
    this.tareaE = tarea1;
  }

  /*Subimos la tarea editada*/
  tareaEditada():void{
    this.gestorHTTP.putTarea(this.tareaE).subscribe();
  }



}
