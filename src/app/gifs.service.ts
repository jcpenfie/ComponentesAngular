import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }
  retornar() {
    return this.http.get("https://api.giphy.com/v1/gifs/trending?api_key=uLkSq2pMKkCWRNGJqI1TSr7vA2hPmqHb&limit=12");
  }
}
