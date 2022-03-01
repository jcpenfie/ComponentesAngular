import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { JuegoTragaperrasComponent } from './juego-tragaperras/juego-tragaperras.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServiciosComponent } from './servicios/servicios.component';



const routes: Routes = [
{
  path: 'servicio',
  component:ServiciosComponent
},
{
  path: 'pipes',
  component:PipesComponent
},
{
  path: 'probin',
  component:JuegosComponent
},
{
  path: 'evento',
  component:JuegoTragaperrasComponent
},
{
  path: 'formulario',
  component:FormularioReactivoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
