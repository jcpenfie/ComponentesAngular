import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-tragaperras',
  templateUrl: './juego-tragaperras.component.html',
  styleUrls: ['./juego-tragaperras.component.css']
})
export class JuegoTragaperrasComponent implements OnInit {
  mensaje: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  mensajes(entrada: string) {
    this.mensaje = entrada;
    document.getElementById('alerta')?.setAttribute('class', 'visible alert alert-success text-center')
  }
}
