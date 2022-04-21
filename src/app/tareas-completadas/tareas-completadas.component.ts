import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-tareas-completadas',
  templateUrl: './tareas-completadas.component.html',
  styleUrls: ['./tareas-completadas.component.scss']
})
export class TareasCompletadasComponent implements OnInit {

  tareasC: Tarea[] = [];
  displayTareasC?: boolean = false;

  constructor(private gestorHTTP: TareasServiceService) { }

  ngOnInit(): void {
    this.gestorHTTP.getTareasC().subscribe(x => this.tareasC = x);
  }

  /*Obtener tareas completadas*/
  obtenerTareasC():void{
    console.table(this.tareasC);
    this.displayTareasC = true;
  }

   /*Eliminamos una tarea por Id*/
  eliminarTarea(ID?:number){

    this.gestorHTTP.deleteTarea(ID)?.subscribe();
    this.obtenerTareasC(); //Obtenemos de nuevo las tareas ya completadas
  }

}
