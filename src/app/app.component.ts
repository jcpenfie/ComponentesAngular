import { Component, OnInit } from '@angular/core';
import { GifsService } from './gifs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones = [
    ['Servicios', 'servicio'], ['Pipe', 'pipes'], ['PropertyBinding', 'probin'], ['Evento', 'evento'], ['Formulario', 'formulario']
  ];

  ngOnInit() {
  }

}
