import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsolasService {

  API_URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getConsolas(){
    return this.http.get(`${this.API_URI}/consolas`);
  }

}
