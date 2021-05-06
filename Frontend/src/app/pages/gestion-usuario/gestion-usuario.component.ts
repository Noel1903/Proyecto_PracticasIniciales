import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent implements OnInit {
  showFiller = false;
  roll=localStorage.getItem("Roll")
  usuarios:any[]=[];
  form:FormGroup;
  constructor(private router: Router,
     private authService: AuthServiceService,
     public http:HttpService,
     private fb:FormBuilder) {

    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      username: ['',Validators.required],
      correo: ['',Validators.required],
      contraseña: ['',Validators.required],
      biografia: ['',Validators.required],
      fecha: ['',Validators.required],
      roll:['user'],
  });
   }

  ngOnInit(): void {
   
    console.log(this.authService.isLoggedIn())
    if(!this.authService.isLoggedIn()){
     if(localStorage.getItem("id_token")!=""){
      if(localStorage.getItem("Roll")=="admin"){
        this.obtieneusuarios();
      }else{
        this.obtieneusuario(localStorage.getItem("id_usuario"));
      }
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
    this.router.navigate(['/gestionusuario']);
  }
  biblioteca(){}

  main(){
    this.router.navigate(['/main']);
  }

  obtieneusuarios(){
    this.http.lisarusuarios().subscribe(
      (res:any)=>{

      
      this.usuarios=res;
      console.log(this.usuarios)
      },
      
      (error)=>{
      }
      )
  }

  obtieneusuario(id_usuario:string){
    
    
    this.http.obtieneusuario(id_usuario).subscribe(
      (res:any)=>{

        this.usuarios=res;
        console.log(this.usuarios)
    },(error)=>{

    })
  }

  eliminar(userid:number){
    this.http.eliminarusuario(userid).subscribe(
      (res:any)=>{
        this.usuarios=res;
      },(error)=>{
          alert("NO SE PUEDE ELIMINAR EL USUARIO YA TIENE INFORMACION ASOCIADA.")
      })
  }

  nuevousuario(){
    this.router.navigate(['/registro']);
  }

}
