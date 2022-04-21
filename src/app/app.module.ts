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
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogoAnyadirTareaComponent } from './dialogo-anyadir-tarea/dialogo-anyadir-tarea.component';
import { MenuComponent } from './menu/menu.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    DialogoAnyadirTareaComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [TareasServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
