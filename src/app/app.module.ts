import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarrademenuComponent } from './barrademenu/barrademenu.component';
import {HttpClientModule} from '@angular/common/http';
import { VerificadoPipe } from './verificado.pipe';
import { ServiciosComponent } from './servicios/servicios.component';
import { PipesComponent } from './pipes/pipes.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    BarrademenuComponent,
    VerificadoPipe,
    ServiciosComponent,
    PipesComponent,
    JuegosComponent,
    ListadoJuegosComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
