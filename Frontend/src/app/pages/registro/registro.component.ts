import { HttpService } from './../../services/http.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder, 
    private authService: AuthServiceService, 
    private router: Router,private http:HttpService) {
      this.form = this.fb.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        username: ['',Validators.required],
        correo: ['',Validators.required],
        contraseña: ['',Validators.required],
        biografia: ['',Validators.required],
        fecha: ['',Validators.required],
    });
     }
  ngOnInit(): void {
  }
  Crearusuario(){

    const val = this.form.value;
 
   this.http.creausuario(val).subscribe(
     (res:any)=>{
        alert(res)
     },
     (error)=>{
      alert(error+"error al crear usuario")
     }
     )

  }

}
