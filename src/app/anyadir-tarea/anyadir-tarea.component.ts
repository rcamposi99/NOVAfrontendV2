import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogoAnyadirTareaComponent } from '../dialogo-anyadir-tarea/dialogo-anyadir-tarea.component';

@Component({
  selector: 'app-anyadir-tarea',
  templateUrl: './anyadir-tarea.component.html',
  styleUrls: ['./anyadir-tarea.component.scss']
})

export class AnyadirTareaComponent implements OnInit {

  tarea1:Tarea = {};

  @Output() emitidorEventos= new EventEmitter<string>(); //Sirve para emitir informacion a la clase padre, en este caso app.component.ts

  constructor(private gestorHTTP: TareasServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /*Añadimos una tarea*/
  public tareaCreada():void{
    this.gestorHTTP.postTarea(this.tarea1).subscribe();
    this.emitidorEventos?.emit("Has añadido la tarea: " + this.tarea1?.id)
  }

  /*Abrimos el cuadro de diálogo con los datos para crear una nueva tarea*/
  abrirDialogo(){

    const dialogRef = this.dialog.open(DialogoAnyadirTareaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
