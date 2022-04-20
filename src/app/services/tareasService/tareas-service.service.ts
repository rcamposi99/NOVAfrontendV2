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
  getTareas(): Observable<Tarea[]>{
    return this.gestorHTTP.request<Array<Tarea>>('get',`${this.baseURL}/tareas`);

  }

  /*Obtener una tarea por ID */
  getTareaID(ID: number): Observable<Tarea>{

    return this.gestorHTTP.request<Tarea>('get',`${this.baseURL}/tarea/${ID}`);
  }

  /*Obtener todas las tareas completadas */
  getTareasC(): Observable<Tarea[]>{
    return this.gestorHTTP.request<Array<Tarea>>('get',`${this.baseURL}/ctareas`);

  }

  /*Obtener todas las tareas pendientes */
  getTareasP(): Observable<Tarea[]>{
    return this.gestorHTTP.request<Array<Tarea>>('get',`${this.baseURL}/ptareas`);

  }

  /*Eliminar tarea por ID*/
  deleteTarea(ID:number){
    return this.gestorHTTP.request<any>('delete',`${this.baseURL}tarea/${ID}`);

  }
}
