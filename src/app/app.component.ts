import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TareasCompletadasComponent } from './tareas-completadas/tareas-completadas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  @ViewChild(TaskListComponent) taskList1: TaskListComponent | undefined; //Nos traemos una instancia del modulo hijo
  @ViewChild(TareasCompletadasComponent) tareasC1: TareasCompletadasComponent | undefined; //Nos traemos una instancia del modulo hijo

  mostrarTareas(event: any) : void { //Llamamos a nuestro componente task-list para que refresque la lista de tareas

    this.taskList1?.mostrarListaTareas();
  }

  refrescarTareas(event: any) : void { //Llamamos a nuestro componente task-list para que refresque la lista de tareas

    this.taskList1?.obtenerTareas();
  }

  mostrarTareasC(event: any) : void { //Llamamos a nuestro componente task-list para que refresque la lista de tareas

    this.tareasC1?.obtenerTareasC();
  }


}
