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
  displayTareas? : boolean = true;


  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  /*Simular interruptor*/
  switchBoolean(aux?: boolean){

    if(aux == true){
      return aux = false;
    }else{
      return aux = true;
    }
  }

  /*Mostrar bloque de las tareas*/
  mostrarListaTareas(){

    console.log("antes: " + this.displayTareas)
    this.obtenerTareas();
    this.displayTareas = this.switchBoolean(this.displayTareas); //Decimos si hemos de mostrar o no el bloque de tareas
    console.log("despues: " + this.displayTareas)
  }

  /*Obtenemos una lista de tareas*/
  obtenerTareas():void{

    this.gestorHTTP.getTareas().subscribe(x => this.tareas = x);
  }

  /*Eliminamos una tarea por Id*/
  eliminarTarea(ID?:number){

    this.gestorHTTP.deleteTarea(ID)?.subscribe();
    this.obtenerTareas();

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
