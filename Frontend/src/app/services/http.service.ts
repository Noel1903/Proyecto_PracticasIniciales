import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  verificausuario(username:string,contraseña:string):Observable<any>{
    const parametros={
      usuername:username,
      contraseña:contraseña,
    }
    const options = {
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
     }
   };
   const url = environment.endpoint+"/verificausuario";
   try{
     console.log(JSON.stringify(parametros));
     return this.http.post<any>(url, JSON.stringify(parametros),options);
   }
   catch(err){
     return err
   }
  }
}

