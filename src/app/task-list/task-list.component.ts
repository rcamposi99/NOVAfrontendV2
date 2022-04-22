import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogoEditarTareaComponent } from '../dialogo-editar-tarea/dialogo-editar-tarea.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tareas: Tarea[] = [];
  displayTareas? : boolean = true;

  @Output() emitidorEventos = new EventEmitter<Tarea>();

  constructor(public dialog: MatDialog, private gestorHTTP: TareasServiceService) { }

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
    this.obtenerTareas();
    this.displayTareas = this.switchBoolean(this.displayTareas); //Decimos si hemos de mostrar o no el bloque de tareas
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



  /*Avisamos que queremos editar un tarea*/
  editarTarea(tarea1:Tarea){
    this.emitidorEventos.emit(tarea1);
  }

  abrirDialogo() : void {

    const dialogRef = this.dialog.open(DialogoEditarTareaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
