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
  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  
    console.log(this.authService.isLoggedIn())
   if(!this.authService.isLoggedIn()){
    if(localStorage.getItem("id_token")!=""){

    }else{
      alert("usted no esta logeado ")
      this.router.navigate(['/login']);
    }
   
    }else{
      alert("usted no esta logeado ")
      this.router.navigate(['/login']);
    }
  }
  salir(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  gestionusuario(){
  }
  biblioteca(){}
}
