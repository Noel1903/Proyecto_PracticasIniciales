import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  API_URI = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getJuegos(id_consola: string){
    return this.http.get(`${this.API_URI}consolas/juegos/${id_consola}`)
  }
}
