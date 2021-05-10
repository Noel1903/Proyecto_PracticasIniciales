import { Component, OnInit, HostBinding } from '@angular/core';
import { ConsolasService } from '../../services/consolas.service'
import { Router } from '@angular/router'
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas : any = []

  constructor(private gamesService: ConsolasService, private route: Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.getConsolas()
  }

  getConsolas(){
    this.gamesService.getConsolas().subscribe(
      res => {
        this.consolas = res;
      },
      err => console.error(err)
    );
  }

  redireccionar(id_consola:string){
    this.route.navigate(['/consolas/juegos/'+id_consola]);
  }

  main(){
    this.route.navigate(['/main']);
  }
  salir(){
    this.authService.logout();
    this.route.navigate(['/login']);
  }
  gestionusuario(){
    this.route.navigate(['/gestionusuario']);
  }
  biblioteca(){}

  consola(){
    this.route.navigate(['/consolas']);
  }

}
