import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from "@angular/common/http";
import { TareasServiceService } from './services/tareasService/tareas-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AnyadirTareaComponent } from './anyadir-tarea/anyadir-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AnyadirTareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [TareasServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
