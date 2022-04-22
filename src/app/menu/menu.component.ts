import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogoAnyadirTareaComponent } from '../dialogo-anyadir-tarea/dialogo-anyadir-tarea.component';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';
import { DialogoBuscarComponent } from '../dialogo-buscar/dialogo-buscar.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() emitidorEventos = new EventEmitter<string>();
  @Output() emitidorEventos2 = new EventEmitter<string>();
  @Output() emitidorEventos3 = new EventEmitter<string>();
  @Output() emitidorEventos4 = new EventEmitter<string>();

  constructor(public dialog: MatDialog, public gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
  }

  /*Le estamos avisando a la clase app.component que debe avisar a task-list para que muestre o no la lista de tareas*/
  avisarMostrarListaTareas(): void{

    this.emitidorEventos.emit("");

   }

  /*Avisar que queremos ver las lista de tareas completadas*/
  avisarMostrarTareasC(): void{
    this.emitidorEventos3.emit("");
   }

  /*Avisar que queremos ver la lista de tareas pendientes*/
   avisarMostrarTareasP():void{
    this.emitidorEventos4.emit("");
   }

  /*Eliminamos todas las tareas de la DB*/
  eliminarTareas() : void{
    this.gestorHTTP.deleteTareas().subscribe(); //Eliminamos todas las tareas de la db
    this.emitidorEventos2.emit("") //Avisamos para que se refresque la lista de tareas

  }

  /*Abrimos el cuadro de diálogo con los datos para crear una nueva tarea*/
  abrirDialogo() : void {

    const dialogRef = this.dialog.open(DialogoAnyadirTareaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /*Abrimos el cuadro de diálogo para buscar una tarea por ID*/
  abrirDialogoB() : void {

    const dialogRef = this.dialog.open(DialogoBuscarComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
