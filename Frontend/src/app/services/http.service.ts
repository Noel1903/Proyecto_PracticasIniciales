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
  creausuario(formulario:any):Observable<any>{
    
   
    const options = {
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       
     }
   };
   const url = environment.endpoint+"/crearUsuario";
   try{
     console.log(JSON.stringify(formulario));
     return this.http.post<any>(url, JSON.stringify(formulario),options);
   }
   catch(err){
     return err
   }
  }
  lisarusuarios():Observable<any>{
    const options = {
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Authorization':'Bearer '+localStorage.getItem("id_token")
     }
   };
   const url = environment.endpoint+"/usuarios";
   try{
    
     return this.http.get<any>(url,options);
   }
   catch(err){
     return err
   }
  }


  eliminarusuario(id_usuario:number):Observable<any>{
    const options = {
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
       'Authorization':'Bearer '+localStorage.getItem("id_token")
     },
     body:{
      'id_usuario':id_usuario
     }
   };
   const url = environment.endpoint+"/eliminausuario";
   try{
    
     return this.http.delete<any>(url,options);
   }
   catch(err){
     return err
   }
  }
}

