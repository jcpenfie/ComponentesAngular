import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  // url = 'http://localhost/apiCliente/'; // disponer url de su servidor que tiene las páginas PHP
  url = 'https://ruizgijon.ddns.net/penajc/apiCliente/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  alta(articulo: any) {
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));
  }
}
