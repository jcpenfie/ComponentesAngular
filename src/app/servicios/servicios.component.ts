import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  gifs: any;
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
    this.gifsService.retornar()
      .subscribe(result => this.gifs = result)
  }

  testLog(text: any): void {
    console.log(text)
  }
}
