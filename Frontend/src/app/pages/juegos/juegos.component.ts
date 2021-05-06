import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  juegos : any = []

  constructor(private gamesService: JuegosService, private router: Router) { }

  ngOnInit(): void {
    let url = this.router.url
    let url_part = url.split('/');
    let id =url_part[url_part.length - 1];
    this.getJuegos(id)
  }

  getJuegos(id_consola: string){
    this.gamesService.getJuegos(id_consola).subscribe(
      res => {
        this.juegos = res;
      },
      err => console.error(err)
    );
  }

  

}
