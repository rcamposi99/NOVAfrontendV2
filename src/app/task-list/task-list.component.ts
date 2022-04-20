import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {

  }

  obtenerTareas():void{

    this.gestorHTTP.getTareas().subscribe(x => this.tareas = x);
    console.table(this.tareas)

  }

  eliminarTarea(ID:number){

    this.gestorHTTP.deleteTarea(ID).subscribe();
    console.log("tonto")

  }

  anyadirTarea(){

    const tarea1: Tarea ={
      id: 2,
      descripcion: "Hola",
      estado: "Hecho"
    }

    this.gestorHTTP.postTarea(tarea1).subscribe();
  }

  editarTarea(){

    const tarea1: Tarea ={
      id: 2,
      descripcion: "Cosote 2",
      estado: "Hecho"
    }

    this.gestorHTTP.putTarea(tarea1).subscribe();
  }

}
