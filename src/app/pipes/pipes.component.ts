import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = "ainara feliciano valdés";
  sueldo: number = 739.45;
  nacimiento: Date = new Date(1980,6,31);
  rendimiento: number = 0.643456;


  constructor() { }

  ngOnInit(): void {
  }

}
