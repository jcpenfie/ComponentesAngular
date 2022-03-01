import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent implements OnInit {
  @Input() datos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
