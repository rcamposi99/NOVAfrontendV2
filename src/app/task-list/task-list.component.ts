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

  pruebaTareas():void{

    this.gestorHTTP.getTareas().subscribe(x => this.tareas = x);
    console.table(this.tareas)

  }

}
