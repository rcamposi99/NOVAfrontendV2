import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from './tarea';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasServiceService {

  baseURL:string = "https://novapi.azure-api.net/";

  constructor(private gestorHTTP: HttpClient) { }

  /*Obtener todas las tareas */
  getTareas(){

    return this.gestorHTTP.request<Array<Tarea>>('get',`${this.baseURL}/tareas`);

  }
}
