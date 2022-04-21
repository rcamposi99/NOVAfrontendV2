import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  @ViewChild(TaskListComponent) taskList1: TaskListComponent | undefined; //Nos traemos una instancia del modulo hijo

  mostrarTareas(event: any) : void { //Llamamos a nuestro componente task-list para que refresque la lista de tareas

    this.taskList1?.mostrarListaTareas();
  }

  refrescarTareas(event: any) : void { //Llamamos a nuestro componente task-list para que refresque la lista de tareas

    this.taskList1?.obtenerTareas();
  }

}
