import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/tareasService/tarea';

@Component({
  selector: 'app-anyadir-tarea',
  templateUrl: './anyadir-tarea.component.html',
  styleUrls: ['./anyadir-tarea.component.scss']
})

export class AnyadirTareaComponent implements OnInit {

  tarea1:Tarea = {};

  constructor() { }

  ngOnInit(): void {
  }

  public tareaCreada():void{

  }

}
