import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';


@Component({
  selector: 'app-tareas-pendientes',
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.scss']
})
export class TareasPendientesComponent implements OnInit {

  tareasP: Tarea[] = [];
  displayTareasP?: boolean = false;

  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
    this.gestorHTTP.getTareasP().subscribe(x => this.tareasP = x);
  }

  /*Obtener tareas pendientes*/
  obtenerTareasP():void{
    console.table(this.tareasP);
    this.displayTareasP = true;
  }

   /*Eliminamos una tarea por Id*/
  eliminarTarea(ID?:number){

    this.gestorHTTP.deleteTarea(ID)?.subscribe();
    this.obtenerTareasP(); //Obtenemos de nuevo las tareas ya completadas
  }

}
