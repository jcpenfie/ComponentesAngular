import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  component:ServiciosComponent
},
{
  path: 'formulario',
  component:ServiciosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
