import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos = [
  { codigo: 1, titulo:'Minecraft',ventas: '238 000 000', plataforma: "Multiplataforma", fechaLanzamiento: "18 de noviembre de 2011", desarrollador: "Mojang Studio"},
  { codigo: 2, titulo:'Grand Theft Auto V',ventas: '160 000 000', plataforma: "Multiplataforma", fechaLanzamiento: "17 de septiembre de 2013", desarrollador: "Rockstar North"},
  { codigo: 3, titulo:'Tetris (EA)',ventas: '100 000 000', plataforma: "Móvil", fechaLanzamiento: "12 de septiembre de 2006", desarrollador: "EA Mobile"},
  { codigo: 4, titulo:'Wii Sports',ventas: '82 900 000', plataforma: "Wii", fechaLanzamiento: "19 de noviembre de 2006", desarrollador: "Nintendo EAD"},
  { codigo: 5, titulo:"PlayerUnknown's Battlegrounds",ventas: '70 000 000', plataforma: "Multiplataforma", fechaLanzamiento: "20 de diciembre de 2017", desarrollador: "PUBG Studios"},
  { codigo: 6, titulo:'Super Mario Bros.',ventas: '58 000 000', plataforma: "Multiplataforma", fechaLanzamiento: "13 de septiembre de 1985", desarrollador: "Nintendo"},
  { codigo: 7, titulo:'Pokémon Rojo/Verde/Azul/Amarillo',ventas: '47 520 000', plataforma: "Game Boy", fechaLanzamiento: "27 de febrero de 1996", desarrollador: "Game Freak"},
  { codigo: 8, titulo:'Mario Kart 8/Deluxe',ventas: '47 200 000', plataforma: "Wii U/Switch", fechaLanzamiento: "29 de mayo de 2014", desarrollador: "Nintendo EAD"},
  { codigo: 9, titulo:'Wii Fit y Wii Fit Plus',ventas: '43 800 000', plataforma: "Wii", fechaLanzamiento: "1 de diciembre de 2007", desarrollador: "Nintendo EAD"},
  { codigo: 10, titulo:'Red Dead Redemption',ventas: '2	43 000 000', plataforma: "Multiplataforma", fechaLanzamiento: "26 de octubre de 2018", desarrollador: "Rockstar Studios"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
