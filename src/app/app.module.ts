import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';//agrega el cuadro
import {MatTabsModule} from '@angular/material/tabs';//nav de arriba
import {MatInputModule} from '@angular/material/input';//cajas de txt
import {MatButtonModule} from '@angular/material/button';//boton
import {FormsModule} from '@angular/forms';//modulo de formularios
import {MatIconModule} from '@angular/material/icon' //iconos


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, MatTabsModule, MatInputModule,
    MatButtonModule, FormsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
