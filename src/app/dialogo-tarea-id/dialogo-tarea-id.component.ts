import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';
import { ComunicadorService } from '../services/comunicador.service';
import { TareasServiceService } from '../services/tareasService/tareas-service.service';

@Component({
  selector: 'app-dialogo-tarea-id',
  templateUrl: './dialogo-tarea-id.component.html',
  styleUrls: ['./dialogo-tarea-id.component.scss']
})
export class DialogoTareaIdComponent implements OnInit {

  tarea1:Tarea = {}
  idBuscar:number|undefined;

  constructor(public comunicador: ComunicadorService, public gestorHTTP:TareasServiceService) { }

  ngOnInit(): void {
    this.encontrarTarea();
  }

  encontrarTarea():void{
    this.recibirTareaID();
    this.getTareaDB();
  }

  recibirTareaID(){
    this.idBuscar = this.comunicador.getIDbuscar();
  }

  getTareaDB():void{
    this.gestorHTTP.getTareaID(this.idBuscar).subscribe(tarea => this.tarea1 = tarea);
  }

}
