import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, Routes } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'white'},
  ];

  constructor(private router: Router,private http:HttpService , private authService: AuthServiceService) { }

  ngOnInit(): void {
  }
 public async verificarusuario(username:string,contraseña:string){
  this.http.verificausuario(username,contraseña).subscribe(
  (res:any)=>{
   
    this.authService.setSession(res)
    console.log("User is logged in");
    this.router.navigate(['/main']);
  },
  (error)=>{

  }
  )
  }

  public async registrarusuario(){
    this.router.navigate(['/registro']);
  }

}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

