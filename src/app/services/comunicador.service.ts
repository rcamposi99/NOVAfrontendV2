import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  private IDbuscar: number | undefined;

  constructor() { }

  setIDbuscar(id?:number){
    this.IDbuscar = id;
  }

  getIDbuscar(): number | undefined{
    return this.IDbuscar;
  }
}
