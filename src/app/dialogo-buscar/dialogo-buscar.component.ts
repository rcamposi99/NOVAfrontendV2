import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../services/comunicador.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogoTareaIdComponent } from '../dialogo-tarea-id/dialogo-tarea-id.component';

@Component({
  selector: 'app-dialogo-buscar',
  templateUrl: './dialogo-buscar.component.html',
  styleUrls: ['./dialogo-buscar.component.scss']
})
export class DialogoBuscarComponent implements OnInit {

  id1:number|undefined;

  constructor(public comunicador: ComunicadorService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  enviarID(){
    this.comunicador.setIDbuscar(this.id1);
  }


  abrirDialogo() : void {

    const dialogRef = this.dialog.open(DialogoTareaIdComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
