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
    this.obtenerTareas();
  }

  /*Obtenemos una lista de tareas*/
  obtenerTareas():void{

    this.gestorHTTP.getTareas().subscribe(x => this.tareas = x);
    console.table(this.tareas)
  }

  /*Eliminamos una tarea por Id*/
  eliminarTarea(ID:number){

    this.gestorHTTP.deleteTarea(ID).subscribe();
    console.log("tonto")

  }

  /*Eliminamos todas las tareas de la DB*/
  eliminarTareas(){
    this.gestorHTTP.deleteTareas().subscribe();
  }

  /*Añadimos una tarea*/
  anyadirTarea(){

    const tarea1: Tarea ={
      id: 2,
      descripcion: "Hola",
      estado: "Hecho"
    }

    this.gestorHTTP.postTarea(tarea1).subscribe();
  }

  /*Editamos una tarea*/
  editarTarea(){

    const tarea1: Tarea ={
      id: 2,
      descripcion: "Cosote 2",
      estado: "Hecho"
    }

    this.gestorHTTP.putTarea(tarea1).subscribe();
  }

}
