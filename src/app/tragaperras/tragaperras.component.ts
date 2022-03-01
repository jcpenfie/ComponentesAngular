import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tragaperras',
  templateUrl: './tragaperras.component.html',
  styleUrls: ['./tragaperras.component.css']
})
export class TragaperrasComponent implements OnInit {

  imagenes: string[] = ['bar', 'campana', 'cereza', 'limon', 'naranja', 'platano', 'sandia', 'siete', 'uva']
  @Input() credito: number = 0;
  @Output() premio = new EventEmitter();

  ngOnInit(): void {
  }

  valor1: any;
  valor2: any;
  valor3: any;
  constructor() {
    this.valor1 = this.imagenes[this.retornarAleatorio()];
    this.valor2 = this.imagenes[this.retornarAleatorio()];
    this.valor3 = this.imagenes[this.retornarAleatorio()];
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 9);
  }

  jugar() {

    if(this.credito > 0){
      this.premio.emit("Nada :(");
    }


    if (this.credito != 0) {
      this.valor1 = this.imagenes[this.retornarAleatorio()];
      this.valor2 = this.imagenes[this.retornarAleatorio()];
      this.valor3 = this.imagenes[this.retornarAleatorio()];
      if (this.valor1 == 'siete' && this.valor2 == 'siete' && this.valor3 == 'siete') {
        this.premio.emit("¡Premio gordo! 1000€");
        this.credito += 1000;
      } else if (this.valor1 == this.valor2 && this.valor2 == this.valor3) {
        this.premio.emit("Enhorabuena 20€");
        this.credito += 20;
      } else if (this.valor1 == this.valor2 || this.valor2 == this.valor3 || this.valor1 == this.valor3) {
        this.premio.emit("Enhorabuena 5€");
        this.credito += 5;
      } else {
        this.credito -= 5;
      }
    } else {
      this.premio.emit("Sin créditos suficientes");
    }
  }

}
