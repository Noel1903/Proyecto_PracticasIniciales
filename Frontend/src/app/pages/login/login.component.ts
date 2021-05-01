import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'white'},
  ];

  constructor(private router: Router,private http:HttpService) { }

  ngOnInit(): void {
  }
  estatus:any ;
 public async verificarusuario(username:string,contraseña:string){


 
  this.http.verificausuario(username,contraseña).subscribe(
  (res:any)=>{
      res.forEach(element => {
       this.estatus=element.usuario
      });
      
      if(this.estatus!='0'){
        console.log("bienvenido 222")
        this.router.navigate(['/main']);
      }else{
        alert("error al ingresar verifique su contraseña")
      }
  },
  (error)=>{

  }
  )
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

