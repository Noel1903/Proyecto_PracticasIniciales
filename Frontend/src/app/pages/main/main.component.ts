import { HttpService } from './../../services/http.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showFiller = false;
  juegos:any[]
  roll=localStorage.getItem("Roll")
  constructor(private router: Router, private authService: AuthServiceService,private http:HttpService) { }

  ngOnInit(): void {
    
  
    console.log(this.authService.isLoggedIn())
   if(!this.authService.isLoggedIn()){
    if(localStorage.getItem("id_token")!=""){
      this.http.obtienejuegos().subscribe((res:any)=>{
        this.juegos = res;
        console.log(this.juegos)
      },(error)=>{

      })
    }else{
      alert("usted no esta logeado ")
      this.router.navigate(['/login']);
    }
   
    }else{
      alert("usted no esta logeado ")
      this.router.navigate(['/login']);
    }
  }
  main(){
    this.router.navigate(['/main']);
  }
  salir(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  gestionusuario(){
    this.router.navigate(['/gestionusuario']);
  }
  biblioteca(){}
}
